import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWQnQk9bUthQf0xCnNSuKNGrFJwtOoOqY",
    authDomain: "attar-cycles.firebaseapp.com",
    projectId: "attar-cycles",
    storageBucket: "attar-cycles.firebasestorage.app",
    messagingSenderId: "205768448009",
    appId: "1:205768448009:web:01131aa17760c1ac3180d8",
    measurementId: "G-NQ1XY5ZLXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
