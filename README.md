# abstracteducation/svg (jsDelivr)

This package is a thin cloak that embeds the live Abstract. SVG build at:

https://artemata.it/svg/

jsDelivr cannot host Scramjet service workers, Wisp, or same-origin `/api/*`
routes. Loading the full Vite app from `cdn.jsdelivr.net` breaks browser,
music, and games. The iframe keeps the cloak URL on jsDelivr while the real
app runs on `artemata.it`.

## URLs

- https://cdn.jsdelivr.net/gh/abstracteducation/svg@main/index.svg
- https://cdn.jsdelivr.net/gh/abstracteducation/svg@main/index.html
