// Image Caching Service Worker for Tokkumaa Restaurant
const CACHE_NAME = 'tokkumaa-images-v1';
const IMAGE_CACHE_URLS = [
  // Preload common food images from Unsplash
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  'https://images.unsplash.com/photo-1553979459-d2229ba7433a',
  'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b',
  'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f'
];

// Install event - cache critical images
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching food images...');
        return cache.addAll(IMAGE_CACHE_URLS);
      })
      .catch(err => console.log('Cache install failed:', err))
  );
});

// Fetch event - serve from cache or fetch with fallback
self.addEventListener('fetch', event => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          
          return fetch(event.request)
            .then(fetchResponse => {
              // Cache the new image
              const responseClone = fetchResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseClone);
                });
              return fetchResponse;
            })
            .catch(() => {
              // Return fallback image if network fails
              return new Response(
                `<svg width="240" height="240" xmlns="http://www.w3.org/2000/svg">
                  <rect width="240" height="240" fill="#FF6B35"/>
                  <text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em">🍽️</text>
                </svg>`,
                { 
                  headers: { 
                    'Content-Type': 'image/svg+xml',
                    'Cache-Control': 'max-age=86400'
                  }
                }
              );
            });
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});