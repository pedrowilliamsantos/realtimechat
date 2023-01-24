import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAkeSO5GCvrx5oD7wTwGPzWiJ_XEzn4A8U",
  authDomain: "realtimechat-22939.firebaseapp.com",
  projectId: "realtimechat-22939",
  storageBucket: "realtimechat-22939.appspot.com",
  messagingSenderId: "121523656636",
  appId: "1:121523656636:web:39d5fa19293c47c50abdb9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()