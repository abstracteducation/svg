/*__ABX_OBF__*/if (navigator.userAgent.includes("Firefox")) {
  Object.defineProperty(globalThis, "crossOriginIsolated", {
    value: true,
    writable: false,
  });
}

const __SW_VERSION = new URL(self.location.href).searchParams.get("v") || "dev";

importScripts(new URL(`assets/c/runtime.js?v=${__SW_VERSION}`, self.registration.scope).href);

const { OufjgpfeServiceWorker } = $oufjgpfeLoadWorker();
let oufjgpfe = new OufjgpfeServiceWorker();

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
  oufjgpfe.addEventListener("request", (e) => {
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

async function ensureOufjgpfeConfig() {
  for (let attempt = 0; attempt < 20; attempt++) {
    await oufjgpfe.loadConfig();
    if (oufjgpfe.config?.prefix && oufjgpfe.config?.files) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error("Workspace configuration is unavailable");
}

// The page writes a config whose file URLs carry its build `?v=`. This worker's
// runtime (importScripts above) is pinned to __SW_VERSION, and every build
// renames the runtime's globals, so rewriting pages with a config from another
// build produces scripts that reference undefined `$...$prop` globals. Refuse
// loudly instead; the page detects the mismatch and re-registers.
function configBuildVersion() {
  const all = oufjgpfe.config?.files?.all;
  if (typeof all !== "string") return null;
  try { return new URL(all, self.registration.scope).searchParams.get("v"); } catch { return null; }
}

function configMatchesWorker() {
  const v = configBuildVersion();
  return v === null || v === __SW_VERSION;
}

const VERSION_MISMATCH_BODY = "Workspace version mismatch: reload the page.";

function scopePathname() {

  const pathname = new URL(self.registration.scope).pathname
  return pathname.endsWith("/") ? pathname : `${pathname}/`
}

function workspacePrefixPath() {
  return `${scopePathname()}wscope/`
}

function repairRelativeLeak(event) {
  if (event.request.method !== "GET" && event.request.method !== "HEAD") return null;

  let reqUrl;
  try { reqUrl = new URL(event.request.url); } catch { return null; }
  const prefixPath = workspacePrefixPath();
  if (reqUrl.origin !== self.location.origin || !reqUrl.pathname.startsWith(prefixPath)) return null;

  let decoded;
  try { decoded = decodeURIComponent(reqUrl.pathname.slice(prefixPath.length) + reqUrl.search); } catch { return null; }

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
    await ensureOufjgpfeConfig();
    if (!configMatchesWorker()) {
      return new Response(VERSION_MISMATCH_BODY, {
        status: 502,
        statusText: "Workspace version mismatch",
        headers: { "content-type": "text/plain; charset=utf-8", "x-abulxt-workspace": "stale" },
      });
    }

    const repaired = repairRelativeLeak(event);
    const request = repaired || event.request;
    const target = repaired ? { request, clientId: event.clientId } : event;

    if (oufjgpfe.route(target)) {
      const response = await oufjgpfe.fetch(target);
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

  if (url.origin === self.location.origin && url.pathname.startsWith("/api/")) {
    return;
  }

  const prefix = workspacePrefixPath()
  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith(prefix) ||
      url.pathname === new URL("assets/c/runtime.wasm", self.registration.scope).pathname ||
      url.pathname === oufjgpfe.config?.files?.wasm)
  ) {
    event.respondWith(handleRequest(event));
  }
});

self.addEventListener("message", ({ data, ports }) => {
  if (!data || typeof data !== "object") return;
  if (data.type === "playgroundData") {
    playgroundData = data;
    return;
  }
  // Plain key on purpose: it must survive the per-build identifier renaming so
  // a page from any build can ask any worker which build it is.
  if (data.type === "abulxt:version" && ports && ports[0]) {
    ports[0].postMessage({ type: "abulxt:version", version: __SW_VERSION });
  }
});
