// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhDKFbaTiNhEHXWTw7ofIgL4yDDW9SoC8",
  authDomain: "dragon-news-5b4a6.firebaseapp.com",
  projectId: "dragon-news-5b4a6",
  storageBucket: "dragon-news-5b4a6.firebasestorage.app",
  messagingSenderId: "767008657216",
  appId: "1:767008657216:web:a70bf1d827d48d07db74a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;