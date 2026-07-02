import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewx-f4a53.firebaseapp.com",
  projectId: "interviewx-f4a53",
  storageBucket: "interviewx-f4a53.firebasestorage.app",
  messagingSenderId: "271116504000",
  appId: "1:271116504000:web:1bd802ad4912754cfb5625"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };