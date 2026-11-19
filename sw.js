const CACHE_NAME = 'mauzlagi-v1';
const ASSETS = [
  './',
  'index.html',
  'katalog.html',
  'kustomisasi.html',
  'checkout.html',
  'kebijakan.html',
  'mauzlagi.css',
  'config.js',
  'products.js',
  'cart.js',
  'mauzlagi-ui.js',
  'mauzlagi-pages.js',
  'MauzLagi.png',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
