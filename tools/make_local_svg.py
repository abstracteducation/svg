#!/usr/bin/env python3
"""Build a single-file, locally runnable SVG loader for the jsDelivr cloak.

The output is one small .svg file that can be opened straight from disk
(file://) or hosted anywhere. It does not embed the app; it finds a mirror of
the published package (github.com/abstracteducation/svg) that answers, then
shows that mirror's index.svg full-window in an iframe.

How it works:
  * SVG root -> <foreignObject> -> XHTML document. Browsers run <script> inside
    an SVG opened as a top-level document, so the file behaves like a page.
  * Mirror base URLs are XOR'd with a per-build random key and base64-encoded,
    so no host name appears in plaintext in the file.
  * Mirrors are probed with a staggered race (a new probe starts every
    STAGGER ms, or immediately when one fails); the first mirror that answers
    wins and the rest are aborted. The winner is remembered in localStorage and
    tried first next time.
  * `?direct` in the URL navigates the whole tab to the mirror instead of
    framing it.

Usage:
  python svg/scripts/make_local_svg.py [--out svg/local/abulxt.svg]
      [--mirror URL ...] [--title TEXT]
"""

from __future__ import annotations

import argparse
import base64
import json
import secrets
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Every base must end with "/" and serve the published package root.
# Only add a mirror whose origin the API CORS allow-list accepts
# (main/src/server/cors-api.ts + the Caddy/OpenResty jsDelivr maps). Other
# jsDelivr edges and githack serve the files, but the app's API calls from
# them are CORS-blocked and it renders black.
DEFAULT_MIRRORS = [
    "https://cdn.jsdelivr.net/gh/abstracteducation/svg@main/",
]

ICON = (
    "data:image/svg+xml,"
    "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%3E"
    "%3Crect%20width%3D%2232%22%20height%3D%2232%22%20rx%3D%227%22%20fill%3D%22%23111%22%2F%3E"
    "%3Cpath%20d%3D%22M9%2023L16%209L23%2023%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20"
    "stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E"
)

STYLE = (
    "html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#000;color:#9a9a9a;"
    "font:500 13px system-ui,-apple-system,Segoe UI,sans-serif}"
    "foreignObject{overflow:visible}"
    "#l{position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px}"
    "#s{width:28px;height:28px;border:3px solid #333;border-top-color:#fff;border-radius:50%;"
    "animation:r .8s linear infinite}"
    "@keyframes r{to{transform:rotate(360deg)}}"
    "#b{display:none;padding:7px 14px;border:1px solid #444;border-radius:8px;background:#151515;"
    "color:#eee;font:inherit;cursor:pointer}"
    "#l.x #s{display:none}#l.x #b{display:block}"
    "iframe{position:fixed;inset:0;width:100%;height:100%;border:0;background:#000}"
)

LOADER_JS = r"""
(function(){
"use strict";
var K=__KEY__,M=__MIRRORS__,ENTRY="index.svg",LAST="__lx_m",STAGGER=1200,TIMEOUT=8000;
var box=document.getElementById("l"),msg=document.getElementById("m"),btn=document.getElementById("b");
function say(t){msg.textContent=t}
function dec(s){try{var b=atob(s),o="";for(var i=0;i<b.length;i++)o+=String.fromCharCode(b.charCodeAt(i)^K.charCodeAt(i%K.length));return o}catch(e){return""}}
var mirrors=M.map(dec).filter(function(u){return /^https:\/\/[^\/]+\/.*\/$/.test(u)});
function store(v){try{if(v==null)localStorage.removeItem(LAST);else localStorage.setItem(LAST,v)}catch(e){}}
function order(){var l=mirrors.slice(),last=null;try{last=localStorage.getItem(LAST)}catch(e){}
var i=l.indexOf(last);if(i>0){l.splice(i,1);l.unshift(last)}return l}
function probe(base,signal){return fetch(base+ENTRY,{cache:"no-store",credentials:"omit",mode:"cors",signal:signal}).then(function(r){if(!r.ok)throw new Error(String(r.status));return r.text()}).then(function(t){if(t.indexOf("<foreignObject")<0)throw new Error("not the app");return base})}
function race(list){return new Promise(function(resolve,reject){
var i=0,live=[],done=false,timer=0;
function settleFail(){if(done)return;if(i<list.length)next();else if(!live.length){done=true;reject(new Error("no mirror"))}}
function next(){clearTimeout(timer);if(done||i>=list.length)return;
var base=list[i++],c=new AbortController(),t=setTimeout(function(){c.abort()},TIMEOUT);live.push(c);
probe(base,c.signal).then(function(b){clearTimeout(t);if(done)return;done=true;clearTimeout(timer);
live.forEach(function(x){if(x!==c)x.abort()});resolve(b)},function(){clearTimeout(t);live.splice(live.indexOf(c),1);settleFail()});
if(i<list.length)timer=setTimeout(next,STAGGER)}
next()})}
function show(base){store(base);
if(/[?&]direct(=|&|$)/.test(location.search)){location.replace(base+ENTRY+location.hash);return}
var f=document.createElementNS("http://www.w3.org/1999/xhtml","iframe");
f.setAttribute("allow","fullscreen; autoplay; clipboard-read; clipboard-write; microphone; camera; display-capture; encrypted-media; picture-in-picture; gamepad; screen-wake-lock");
f.setAttribute("referrerpolicy","no-referrer");
f.src=base+ENTRY+location.hash;
box.parentNode.appendChild(f);
setTimeout(function(){box.style.display="none"},400)}
function start(){box.className="";say("Connecting\u2026");
if(!mirrors.length){fail();return}
race(order()).then(show,fail)}
function fail(){store(null);box.className="x";say("Couldn't reach the app from here. Check your connection, then try again.")}
btn.addEventListener("click",start);
start();
})();
"""


def encode(url: str, key: str) -> str:
    raw = bytes(ord(ch) ^ ord(key[i % len(key)]) for i, ch in enumerate(url))
    return base64.b64encode(raw).decode("ascii")


def build(mirrors: list[str], title: str) -> str:
    for m in mirrors:
        if not (m.startswith("https://") and m.endswith("/")) or not m.isascii():
            raise SystemExit(f"mirror must be an ASCII https:// URL ending in '/': {m!r}")
    key = secrets.token_hex(12)
    js = (
        LOADER_JS.strip()
        .replace("__KEY__", json.dumps(key))
        .replace("__MIRRORS__", json.dumps([encode(m, key) for m in mirrors]))
    )
    if "]]>" in js or "]]>" in STYLE:
        raise SystemExit("CDATA terminator in inline code")
    title_xml = title.replace("&", "&amp;").replace("<", "&lt;")
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">'
        '<foreignObject width="100%" height="100%">'
        '<html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head>'
        '<meta charset="UTF-8" />'
        '<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
        f'<link rel="icon" type="image/svg+xml" href="{ICON}" />'
        f"<title>{title_xml}</title>"
        f"<style><![CDATA[{STYLE}]]></style>"
        "</head><body>"
        '<div id="l"><div id="s"></div><p id="m"></p><button id="b" type="button">Try again</button></div>'
        f"<script>/*<![CDATA[*/{js}/*]]>*/</script>"
        "</body></html></foreignObject></svg>\n"
    )


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--out", type=Path, default=ROOT / "svg" / "local" / "abulxt.svg")
    p.add_argument("--mirror", action="append", help="mirror base URL (repeatable; replaces the defaults)")
    p.add_argument("--title", default="Notes")
    args = p.parse_args()

    svg = build(args.mirror or DEFAULT_MIRRORS, args.title)
    ET.fromstring(svg)  # must be well-formed XML or the browser shows a parse error
    for m in args.mirror or DEFAULT_MIRRORS:
        host = m.split("/")[2]
        if host in svg:
            raise SystemExit(f"plaintext mirror host leaked into output: {host}")

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(svg, encoding="utf-8", newline="\n")
    print(f"wrote {args.out} ({len(svg.encode())} bytes, {len(args.mirror or DEFAULT_MIRRORS)} mirrors)")


if __name__ == "__main__":
    main()
