self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('prac02')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/favicon.ico',
          '/src/css/app.css',
          '/src/js/app.js'
        ])
      })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});