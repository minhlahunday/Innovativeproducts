// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQhHP7wID45meAobQBaWaZRvV2RBwkU8w",
  authDomain: "innovative-product-43f01.firebaseapp.com",
  projectId: "innovative-product-43f01",
  storageBucket: "innovative-product-43f01.firebasestorage.app",
  messagingSenderId: "101288644336",
  appId: "1:101288644336:web:d9d498f450c61877057c35",
  measurementId: "G-81DM0WGKQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);