importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

// ตรวจสอบว่า Workbox โหลดสำเร็จ
if (workbox) {
  // ล้างข้อมูลแคชเก่าที่ไม่ได้ใช้
  workbox.precaching.cleanupOutdatedCaches();

  // Precache ไฟล์ที่ระบุใน manifest
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);
}

// บังคับให้ Service Worker ทำงานทันทีหลังจากติดตั้ง
self.addEventListener('install', () => self.skipWaiting());
