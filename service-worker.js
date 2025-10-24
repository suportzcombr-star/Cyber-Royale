self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('roleta-cache').then(cache => {
      return cache.addAll([
        './roletacyberpunk.html',
        './roleta.mp3',
        './manifest.json',
        './ícone.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});