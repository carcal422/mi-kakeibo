// Mi Kakeibo · service worker
// Con internet: siempre trae la versión más nueva de la app (y la guarda).
// Sin internet (o si tarda más de 3 s): usa la copia guardada en el celular.
const CACHE = 'mi-kakeibo-v10';
const FILES = ['./', './index.html', './config.js', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // Google y Drive van directo
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const key = url.origin + url.pathname;
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 3000);
      const res = await fetch(url.href, {signal: ctrl.signal, cache: 'no-cache', credentials: 'same-origin'});
      clearTimeout(t);
      if (res.ok) await cache.put(key, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(key) || await caches.match(e.request, {ignoreSearch: true});
      if (hit) return hit;
      if (e.request.mode === 'navigate') return (await cache.match(url.origin + url.pathname.replace(/[^/]*$/, ''))) || (await caches.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});
