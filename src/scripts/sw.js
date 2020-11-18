import 'regenerator-runtime'; /* for async await transpile */
import {setCacheNameDetails, skipWaiting, clientsClaim} from 'workbox-core';
import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {ExpirationPlugin} from 'workbox-expiration';
import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';

import CONFIG from '@/globals/config';

skipWaiting();
clientsClaim();

setCacheNameDetails(CONFIG.CACHE_NAME);
precacheAndRoute(self.__WB_MANIFEST, {
  ignoreUrlParametersMatching: [/.*/],
});

registerRoute(
    ({url}) => url.origin,
    new StaleWhileRevalidate({
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
);

registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      cacheName: 'images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
);

registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com',
    new StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    }),
);

registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    }),
);

self.addEventListener('push', (event) => {
  const title = 'Direstaurant Notification Push';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
