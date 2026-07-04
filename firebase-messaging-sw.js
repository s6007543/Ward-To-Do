// firebase-messaging-sw.js

// 1. นำเข้า Firebase Script สำหรับทำงานเบื้องหลัง
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 2. ใส่ Config ของคุณ (อันเดียวกับที่ใส่ในหน้าเว็บ)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// 3. เริ่มต้นระบบ Firebase ใน Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 4. ดักจับข้อความแจ้งเตือนเวลาปิดแอป/ล็อกหน้าจอ (Background Message)
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] ได้รับข้อความขณะล็อกจอ ', payload);
  
  const notificationTitle = payload.notification.title || "🚨 แจ้งเตือนผู้ป่วย";
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/825/825590.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/825/825590.png',
    vibrate: [200, 100, 200, 100, 200, 100, 200]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
