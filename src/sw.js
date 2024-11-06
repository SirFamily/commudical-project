import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';

self.__WB_MANIFEST; // ใช้ร่วมกับ workbox สำหรับการแคชไฟล์ที่ต้องการ

const CACHE = "pwa-offline-pages";
const urlsToCache = [
  '/',
  '/src',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/App.css',
  '/src/index.css',
  '/src/PatientCommunicationApp.jsx',
  '/src/PainAssessment.jsx',
  '/index.html',
  '/src/assets/audio/ขอบคุณ.mp3',
  '/src/assets/audio/คลื่นไส้ อาเจียน.mp3',
  '/src/assets/audio/ดื่มน้ำ.mp3',
  '/src/assets/audio/ต้องการดูดเสมหะ.mp3',
  '/src/assets/audio/ต้องการพบญาติ.mp3',
  '/src/assets/audio/ต้องการพบแพทย์.mp3',
  '/src/assets/audio/ต้องการพลิกตัว.mp3',
  '/src/assets/audio/ต้องการอาบน้ำ.mp3',
  '/src/assets/audio/ถ่ายอุจจาระ.mp3',
  '/src/assets/audio/ปรับระดับเตียง.mp3',
  '/src/assets/audio/ปวดขาขวา.mp3',
  '/src/assets/audio/ปวดขาซ้าย.mp3',
  '/src/assets/audio/ปวดท้อง.mp3',
  '/src/assets/audio/ปวดศีรษะ.mp3',
  '/src/assets/audio/ปวดแขนขวา.mp3',
  '/src/assets/audio/ปวดแขนซ้าย.mp3',
  '/src/assets/audio/ปัสสาวะ.mp3',
  '/src/assets/audio/รู้สึกคัน.mp3',
  '/src/assets/audio/รู้สึกผิดหวัง.mp3',
  '/src/assets/audio/รู้สึกร้อน.mp3',
  '/src/assets/audio/รู้สึกสบายดี.mp3',
  '/src/assets/audio/รู้สึกหนาว.mp3',
  '/src/assets/audio/รู้สึกเบื่อ.mp3',
  '/src/assets/audio/รู้สึกเหนื่อย.mp3',
  '/src/assets/audio/รู้สึกโกรธ.mp3',
  '/src/assets/audio/หายใจลำบาก.mp3',
  '/src/assets/audio/หิวข้าว.mp3',
  '/src/assets/audio/อยากกลับบ้าน.mp3',
  '/src/assets/audio/เครียด วิตกกังวล.mp3',
  '/src/assets/audio/เจ็บคอ.mp3',
  '/src/assets/audio/เปิด ปิดไฟ.mp3',
  '/src/assets/audio/เจ็บปาก.mp3',
  '/src/assets/audio/เจ็บหน้าอก.m4a',
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      // Cleanup outdated caches
      cleanupOutdatedCaches();

      // Precache and route using Workbox
      await precacheAndRoute(self.__WB_MANIFEST);

      // Add custom URLs to cache
      const cache = await caches.open(CACHE);
      await cache.addAll(urlsToCache);

      // Make sure the service worker takes control immediately
      self.skipWaiting();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if the response is valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response to cache it
            const responseToCache = response.clone();

            caches.open(CACHE)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
