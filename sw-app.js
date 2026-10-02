/* legacy canvas/app SW — self-retire so classroom-7 can take over */
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    } catch {}
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of clients) {
      try { client.navigate(client.url); } catch {}
    }
  })());
});
self.addEventListener('fetch', (event) => {
  // do not intercept — fall through to network while retiring
});
