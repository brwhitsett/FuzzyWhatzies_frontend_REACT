import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFImOTlFBVYe3W-sSDwwbDI5jRqDwFu40",
  authDomain: "fuzzy-whatzies.firebaseapp.com",
  projectId: "fuzzy-whatzies",
  storageBucket: "fuzzy-whatzies.appspot.com",
  messagingSenderId: "151296375513",
  appId: "1:151296375513:web:2aecdefcce6cdad35cdcc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
