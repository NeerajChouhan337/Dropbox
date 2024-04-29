import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaRjIwm-oNuV0ABHqMnTi6pSl25M38vXk",
  authDomain: "dropbox-ec904.firebaseapp.com",
  projectId: "dropbox-ec904",
  storageBucket: "dropbox-ec904.appspot.com",
  messagingSenderId: "88222939911",
  appId: "1:88222939911:web:12d4d9a0be4a1a7b1423a2"
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
