import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      cleanupOutdatedCaches();
      await precacheAndRoute(self.__WB_MANIFEST);
      self.skipWaiting();
    })()
  );
});
