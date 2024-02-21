let cacheName = "computerStyleV1"
let urlsToCache = [
    "./",
    "./index.html",
    "./styles.css",
    "./img/fotofrontal.jpg",
    "./img/pattern.jpg",
    "./img/angular.png",
    "./img/html5.png",
    "./img/icons.png",
    "./img/javascript.png",
    "./img/logo.png",
    "./img/php.png"
];

self.addEventListener("install", (event) => {
        event.waitUntil(
            caches
              .open(cacheName)
              .then((cache) =>
                cache.addAll(urlsToCache),
            ),
        );
        console.log("Service Worker installed!");
    }
);

self.addEventListener("activate", (event) => {
    console.log("Service Worker activated!");
}
);

// caches.open("computerStyleV2").then(cache => {
//     // cache.add("./styles.css");
//     cache.addAll(["./styles.css", "./img/angular.png"]);
// });

self.addEventListener('fetch', (event) => {
    // Is this one of our precached assets?
    const url = new URL(event.request.url);
    const isPrecachedRequest = urlsToCache.includes(url.pathname);
  
    if (isPrecachedRequest) {
        // Grab the precached asset from the cache
        event.respondWith(caches.open(cacheName).then((cache) => {
        return cache.match(event.request.url);
      }));
    } else {
        // Go to the network
        return;
    }
});
