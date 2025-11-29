const CACHE_NAME = 'khadraoui-v3';
const urlsToCache = [
    '/',
    '/index.html',
    '/offline.html',
    '/manifest.json',
    '/images/logo.png',
    '/images/hero-bg.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Ignore non-GET requests
    if (event.request.method !== 'GET') return;

    // Ignore external resources (optional, but safer for now to focus on our app)
    if (url.origin !== location.origin) return;

    // 1. Navigation Requests (HTML) -> Network First, Fallback to Cache (index.html)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                    return caches.match('/index.html')
                        .then((response) => {
                            return response || caches.match('/offline.html');
                        });
                })
        );
        return;
    }

    // 2. Assets (JS, CSS, Images) -> Cache First, Network Fallback, Cache New
    if (event.request.destination === 'script' ||
        event.request.destination === 'style' ||
        event.request.destination === 'image') {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                    if (response) return response;
                    return fetch(event.request).then((networkResponse) => {
                        // Cache new assets if valid
                        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        }
                        return networkResponse;
                    });
                })
        );
        return;
    }

    // 3. Default -> Network First
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
