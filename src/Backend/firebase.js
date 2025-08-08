
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCySITFBxjb-l4dgr36lidbx8bsfX8woM",
  authDomain: "patricia-apolinario-site.firebaseapp.com",
  projectId: "patricia-apolinario-site",
  storageBucket: "patricia-apolinario-site.firebasestorage.app",
  messagingSenderId: "769774118450",
  appId: "1:769774118450:web:27f72a1cb291c6d8d23e2b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

