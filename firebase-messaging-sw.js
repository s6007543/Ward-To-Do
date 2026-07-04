// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 🛠️ ใส่ Config ของจริง (ต้องตรงกับในหน้า index.html เป๊ะๆ)
const firebaseConfig = {
    apiKey: "AIzaSyB0gDLbeoWBGVINbNFZMJVZriXFXg-pZFs",
    authDomain: "patient-care-7d42d.firebaseapp.com",
    projectId: "patient-care-7d42d",
    storageBucket: "patient-care-7d42d.firebasestorage.app",
    messagingSenderId: "375365313770",
    appId: "1:375365313770:web:88c348583c0d59c23fe393"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

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
