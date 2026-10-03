if (navigator.userAgent.includes("Firefox")) {
  Object.defineProperty(globalThis, "crossOriginIsolated", {
    value: true,
    writable: false,
  });
}

// Read the cache-bust version from this worker's own registration URL (the app
// registers sw-app-c6.js?v=<buildVersion>), so every rebuild refetches runtime.
const __SW_VERSION = new URL(self.location.href).searchParams.get("v") || "dev";

importScripts(new URL(`assets/c/runtime.js?v=${__SW_VERSION}`, self.registration.scope).href);

const { ScramjetServiceWorker } = $scramjetLoadWorker();
let scramjet = new ScramjetServiceWorker();

const CONFIG = {
  blocked: [
    "youtube.com/get_video_info?*adformat=*",
    "youtube.com/api/stats/ads/*",
    "youtube.com/pagead/*",
    ".facebook.com/ads/*",
    ".facebook.com/tr/*",
    ".fbcdn.net/ads/*",
    "graph.facebook.com/ads/*",
    "ads-api.twitter.com/*",
    "analytics.twitter.com/*",
    ".twitter.com/i/ads/*",
    ".ads.yahoo.com",
    ".advertising.com",
    ".adtechus.com",
    ".oath.com",
    ".verizonmedia.com",
    ".amazon-adsystem.com",
    "aax.amazon-adsystem.com/*",
    "c.amazon-adsystem.com/*",
    ".adnxs.com",
    ".adnxs-simple.com",
    "ab.adnxs.com/*",
    ".rubiconproject.com",
    ".magnite.com",
    ".pubmatic.com",
    "ads.pubmatic.com/*",
    ".criteo.com",
    "bidder.criteo.com/*",
    "static.criteo.net/*",
    ".openx.net",
    ".openx.com",
    ".indexexchange.com",
    ".casalemedia.com",
    ".adcolony.com",
    ".chartboost.com",
    ".unityads.unity3d.com",
    ".inmobiweb.com",
    ".tapjoy.com",
    ".applovin.com",
    ".vungle.com",
    ".ironsrc.com",
    ".fyber.com",
    ".smaato.net",
    ".supersoniads.com",
    ".startappservice.com",
    ".airpush.com",
    ".outbrain.com",
    ".taboola.com",
    ".revcontent.com",
    ".zedo.com",
    ".mgid.com",
    "*/ads/*",
    "*/adserver/*",
    "*/adclick/*",
    "*/banner_ads/*",
    "*/sponsored/*",
    "*/promotions/*",
    "*/tracking/ads/*",
    "*/promo/*",
    "*/affiliates/*",
    "*/partnerads/*",
  ]
};

let playgroundData;

function toRegex(pattern) {
  const escaped = pattern
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\*\*/g, "{{DOUBLE_STAR}}")
    .replace(/\*/g, "[^/]*")
    .replace(/{{DOUBLE_STAR}}/g, ".*");
  return new RegExp(`^${escaped}$`);
}

// Precompile the blocked list ONCE at module scope. Compiling ~60 RegExp
// objects on every proxied request was sustained regex churn on the SW thread.
const COMPILED_BLOCKED = CONFIG.blocked.map((raw) => {
  let pattern = raw;
  if (pattern.startsWith("#")) pattern = pattern.substring(1);
  if (pattern.startsWith("*")) pattern = pattern.substring(1);
  if (pattern.includes("/")) {
    const [hostPattern, ...pathParts] = pattern.split("/");
    return { host: toRegex(hostPattern), path: toRegex(`/${pathParts.join("/")}`) };
  }
  return { host: toRegex(pattern), path: null };
});

function isBlocked(hostname, pathname) {
  return COMPILED_BLOCKED.some(({ host, path }) => {
    if (path) return host.test(hostname) && path.test(pathname);
    return host.test(hostname);
  });
}

function attachRequestHandler() {
  scramjet.addEventListener("request", (e) => {
    if (isBlocked(e.url.hostname, e.url.pathname)) {
      e.response = new Response("Site Blocked", { status: 403 });
      return;
    }
    if (playgroundData && e.url.href.startsWith(playgroundData.origin)) {
      const routes = {
        "/": { content: playgroundData.html, type: "text/html" },
        "/style.css": { content: playgroundData.css, type: "text/css" },
        "/script.js": {
          content: playgroundData.js,
          type: "application/javascript",
        },
      };
      const route = routes[e.url.pathname];
      if (route) {
        const headers = { "content-type": route.type };
        e.response = new Response(route.content, { headers });
        e.response.rawHeaders = headers;
        e.response.rawResponse = {
          body: e.response.body,
          headers: headers,
          status: e.response.status,
          statusText: e.response.statusText,
        };
        e.response.finalURL = e.url.toString();
      } else {
        e.response = new Response("empty response", { headers: {} });
      }
    }
  });
}

attachRequestHandler();

async function ensureScramjetConfig() {
  for (let attempt = 0; attempt < 20; attempt++) {
    await scramjet.loadConfig();
    if (scramjet.config?.prefix && scramjet.config?.files) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error("Workspace configuration is unavailable");
}

function scopePathname() {
  // registration.scope may omit the trailing slash under some absolute-base
  // deploys (`/canvas-app` vs `/canvas-app/`). Always normalize before joining
  // so we match `/canvas-app/wscope/...` and not `/canvas-appwscope/...`.
  const pathname = new URL(self.registration.scope).pathname
  return pathname.endsWith("/") ? pathname : `${pathname}/`
}

function workspacePrefixPath() {
  return `${scopePathname()}wscope/`
}

/*
 * Recover relative sub-resources the client rewriter missed.
 *
 * The proxy encodes a whole URL into one opaque path segment
 * (encodeURIComponent), so a proxied page lives at /wscope/<encoded full URL>.
 * When a page sets a resource path the rewriter can't see synchronously —
 * Unity/WebGL loaders building "Build/x.loader.js" at runtime, or a game
 * navigating to "level2.html" — the browser resolves it against the /wscope/
 * root and the service worker receives /wscope/Build/x.loader.js: a bare
 * relative path with no origin. The codec then throws
 * "Failed to construct 'URL'". This rebuilds the real target from the
 * referring document (which IS a proper /wscope/<encoded> URL) and hands
 * scramjet a correctly-encoded request. GET/HEAD only, so there is no body to
 * carry. Returns null when the request is already valid or can't be repaired,
 * leaving normal handling untouched.
 */
function repairRelativeLeak(event) {
  if (event.request.method !== "GET" && event.request.method !== "HEAD") return null;

  let reqUrl;
  try { reqUrl = new URL(event.request.url); } catch { return null; }
  const prefixPath = workspacePrefixPath();
  if (reqUrl.origin !== self.location.origin || !reqUrl.pathname.startsWith(prefixPath)) return null;

  let decoded;
  try { decoded = decodeURIComponent(reqUrl.pathname.slice(prefixPath.length) + reqUrl.search); } catch { return null; }
  // A properly-encoded target always decodes to an absolute URL. Anything else
  // is a relative leak.
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(decoded) || decoded.startsWith("blob:") || decoded.startsWith("data:")) return null;

  const ref = event.request.referrer;
  if (!ref || !ref.startsWith(self.location.origin)) return null;
  let refUrl;
  try { refUrl = new URL(ref); } catch { return null; }
  if (!refUrl.pathname.startsWith(prefixPath)) return null;
  let refTarget;
  try { refTarget = decodeURIComponent(refUrl.pathname.slice(prefixPath.length) + refUrl.search); } catch { return null; }
  if (!/^https?:\/\//i.test(refTarget)) return null;

  let absolute;
  try { absolute = new URL(decoded, refTarget).href; } catch { return null; }

  const fixedUrl = reqUrl.origin + prefixPath + encodeURIComponent(absolute);
  try {
    return new Request(fixedUrl, {
      method: event.request.method,
      headers: event.request.headers,
      credentials: event.request.credentials,
      redirect: event.request.redirect,
    });
  } catch {
    return null;
  }
}

async function handleRequest(event) {
  try {
    await ensureScramjetConfig();

    // scramjet.route/fetch only read { request, clientId }, so a repaired
    // request can be handed over through a lightweight shim.
    const repaired = repairRelativeLeak(event);
    const request = repaired || event.request;
    const target = repaired ? { request, clientId: event.clientId } : event;

    if (scramjet.route(target)) {
      const response = await scramjet.fetch(target);
      const contentType = response.headers.get("content-type") || "";

      const htmlDocument = contentType.includes("text/html") ||
        (contentType.includes("text/plain") && new URL(response.finalURL || request.url).pathname.endsWith(".html"));
      if (htmlDocument) {
        const newHeaders = new Headers(response.headers);
        newHeaders.delete("content-length");
        newHeaders.set("content-type", "text/html; charset=utf-8");
        newHeaders.delete("x-content-type-options");

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      }

      return response;
    }

    return await fetch(request);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Workspace request failed";
    return new Response(message, {
      status: 502,
      statusText: "Workspace request failed",
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
}

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);

self.addEventListener("fetch", (event) => {
  let url;
  try {
    url = new URL(event.request.url);
  } catch {
    return;
  }

  // Hard rule: the workspace proxy must NEVER touch same-origin app/API traffic.
  // Intercepting /api/* (music, auth, ai, stripe, rt, ads) is what produced
  // "Unexpected token '<'" JSON errors and signed users out when a transient
  // SW error returned a text/HTML response instead of the real API JSON.
  if (url.origin === self.location.origin && url.pathname.startsWith("/api/")) {
    return;
  }

  const prefix = workspacePrefixPath()
  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith(prefix) ||
      url.pathname === new URL("assets/c/runtime.wasm", self.registration.scope).pathname ||
      url.pathname === scramjet.config?.files?.wasm)
  ) {
    event.respondWith(handleRequest(event));
  }
});

self.addEventListener("message", ({ data }) => {
  if (data.type === "playgroundData") {
    playgroundData = data;
  }
});
