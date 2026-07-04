// firebase-messaging-sw.js

// 1. นำเข้า Firebase Script สำหรับทำงานเบื้องหลัง
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 2. ใส่ Config ของคุณ (อันเดียวกับที่ใส่ในหน้าเว็บ)
const firebaseConfig = {
    apiKey: "AIzaSyB0gDLbeoWBGVINbNFZMJVZriXFXg-pZFs",
    authDomain: "patient-care-7d42d.firebaseapp.com",
    projectId: "patient-care-7d42d",
    storageBucket: "patient-care-7d42d.firebasestorage.app",
    messagingSenderId: "375365313770",
    appId: "1:375365313770:web:88c348583c0d59c23fe393",
    measurementId: "G-DVGYE8TFEH"
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
