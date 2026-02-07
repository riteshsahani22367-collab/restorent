const CACHE_NAME = "qr-menu-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/menu.html",
  "/admin.html",

  "/style.css",
  "/menu.css",
  "/admin.css",

  "/script.js",
  "/menu.js",
  "/admin.js",

  "/logo.png",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
