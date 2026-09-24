#!/usr/bin/env python3
"""Build lucide-style SVG cloaks from a Vite /svg/ dist folder."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


ENTITY_OK = re.compile(r"&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)")


def escape_ampersands(text: str) -> str:
    return ENTITY_OK.sub("&amp;", text)


VOID_TAGS = ("link", "meta", "img", "br", "hr", "input", "source", "area", "base", "col", "embed", "param", "track", "wbr")


def self_close_void_tags(text: str) -> str:
    """Make HTML void tags XHTML-safe for SVG foreignObject XML parsing."""
    for tag in VOID_TAGS:
        # <tag ...>  -> <tag ... />
        # skip ones already self-closed
        text = re.sub(
            rf"<{tag}(\s[^>]*?)?(?<!/)>",
            lambda m, t=tag: f"<{t}{m.group(1) or ''} />",
            text,
            flags=re.I,
        )
    return text


def to_relative_asset_paths(text: str) -> str:
    """Rewrite absolute /svg/... asset URLs to ./... for jsDelivr/GitHub Pages."""
    text = text.replace('"/svg/', '"./')
    text = text.replace("'/svg/", "'./")
    text = text.replace("(/svg/", "(./")
    return text


def prepare_head(index_html: str, *, relative: bool = False) -> str:
    match = re.search(r"<head>(.*?)</head>", index_html, re.S)
    head = match.group(1).strip() if match else ""
    head = head.replace("<script async ", '<script async="async" ')
    head = re.sub(
        r'<script type="module" crossorigin(?:="anonymous")? src="([^"]+)"></script>',
        lambda m: (
            f'<script crossorigin="anonymous">'
            f'(function(){{import("{m.group(1)}");}})();'
            f"</script>"
        ),
        head,
    )
    head = head.replace(" crossorigin ", ' crossorigin="anonymous" ')
    head = head.replace(" crossorigin>", ' crossorigin="anonymous">')
    if relative:
        head = to_relative_asset_paths(head)
    head = self_close_void_tags(head)
    return escape_ampersands(head)


FO_BOOTSTRAP = r"""(function(){
  const XHTML_NS="http://www.w3.org/1999/xhtml";
  const fo=document.getElementsByTagName("foreignObject")[0]||document.querySelector("foreignObject");
  const root=fo&&fo.firstElementChild;
  if(!root) return;
  const originalCreateElement=document.createElement.bind(document);
  const originalCreateElementNS=document.createElementNS.bind(document);
  const originalGetElementById=document.getElementById.bind(document);
  const originalQuerySelector=document.querySelector.bind(document);
  const originalQuerySelectorAll=document.querySelectorAll.bind(document);
  Object.defineProperty(document,"head",{get(){return root.querySelector("head")},configurable:true});
  Object.defineProperty(document,"body",{get(){return root.querySelector("body")},configurable:true});
  Object.defineProperty(document,"documentElement",{get(){return root},configurable:true});
  document.createElement=function(tagName,options){
    if(typeof tagName==="string"){return originalCreateElementNS(XHTML_NS,tagName,options)}
    return originalCreateElement(tagName,options)
  };
  document.createElementNS=function(namespaceURI,qualifiedName,options){
    if(namespaceURI==null||namespaceURI===XHTML_NS){return originalCreateElementNS(XHTML_NS,qualifiedName,options)}
    return originalCreateElementNS(namespaceURI,qualifiedName,options)
  };
  document.getElementById=function(id){
    try{
      const local=root.querySelector&&root.querySelector("#"+CSS.escape(id));
      if(local) return local;
    }catch(e){
      const local=root.querySelector("[id=\""+String(id).replace(/"/g,"\\\"")+"\"]");
      if(local) return local;
    }
    return originalGetElementById(id);
  };
  document.querySelector=function(sel){
    try{const local=root.querySelector(sel); if(local) return local;}catch(e){}
    return originalQuerySelector(sel);
  };
  document.querySelectorAll=function(sel){
    try{
      const local=root.querySelectorAll(sel);
      if(local&&local.length) return local;
    }catch(e){}
    return originalQuerySelectorAll(sel);
  };
})();"""


def make_svg(head: str) -> str:
    bootstrap = FO_BOOTSTRAP
    # Defer the app module import until #root exists inside the foreignObject.
    head = re.sub(
        r'<script crossorigin="anonymous">\(function\(\)\{import\("([^"]+)"\);\}\)\(\);</script>',
        lambda m: (
            '<script crossorigin="anonymous">(function(){'
            f'const src="{m.group(1)}";'
            "function boot(){"
            'const el=document.getElementById("root");'
            "if(!el){return setTimeout(boot,0)}"
            "import(src);"
            "}"
            "boot();"
            "})();</script>"
        ),
        head,
    )
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <foreignObject width="100%" height="100%">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <script><![CDATA[{bootstrap}]]></script>
        <style><![CDATA[html,body{{margin:0;width:100%;height:100%;overflow:hidden}}foreignObject{{overflow:visible}}]]></style>
        {head}
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  </foreignObject>
</svg>
"""


def strip_cdata(text: str) -> str:
    return re.sub(r"<!\[CDATA\[.*?\]\]>", "", text, flags=re.S)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("dist", type=Path, help="Vite dist directory with index.html")
    parser.add_argument(
        "--relative",
        action="store_true",
        help="Rewrite /svg/ asset URLs to relative ./ paths (jsDelivr-safe)",
    )
    args = parser.parse_args()

    dist: Path = args.dist
    index_path = dist / "index.html"
    index_html = index_path.read_text()
    if args.relative:
        # Keep HTML entry relative too so opening index.html on jsDelivr works.
        index_html = to_relative_asset_paths(index_html)
        index_path.write_text(index_html)
    head = prepare_head(index_html, relative=args.relative)
    svg = make_svg(head)

    (dist / "index.svg").write_text(svg)
    (dist / "logo.svg").write_text(svg)
    (dist / "study.html").write_text(index_html)

    bare = ENTITY_OK.findall(strip_cdata(svg))
    if bare:
        raise SystemExit(f"bare ampersands still present: {bare}")

    print(f"wrote {dist / 'index.svg'} ({(dist / 'index.svg').stat().st_size} bytes)")
    print(f"relative={args.relative}")
    lines = svg.splitlines()
    if len(lines) >= 23:
        print(f"line 23: {lines[22]}")


if __name__ == "__main__":
    main()
