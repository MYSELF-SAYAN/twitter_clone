
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC_VJMsSw7AV9NlfEA9wpJSck--SqvQnSA",
  authDomain: "twitter-x-clone-f142c.firebaseapp.com",
  projectId: "twitter-x-clone-f142c",
  storageBucket: "twitter-x-clone-f142c.appspot.com",
  messagingSenderId: "365452099017",
  appId: "1:365452099017:web:7337a81e4484719dc6bc18",
  measurementId: "G-YEZZCQFFSN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);