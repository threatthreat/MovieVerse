// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfi1vOOfa1pB07B4LjgVPlSrlyK9XmaNE",
  authDomain: "viberox-755b4.firebaseapp.com",
  projectId: "viberox-755b4",
  storageBucket: "viberox-755b4.appspot.com", // ✅ fixed
  messagingSenderId: "860956615492",
  appId: "1:860956615492:web:9c9143cd79112b0c302d11",
  measurementId: "G-KETE028V27",
};

let app;
let analytics;

if (typeof window !== "undefined") {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  if (firebaseConfig.measurementId) {
    analytics = getAnalytics(app);
  }
}

export { app, analytics };
