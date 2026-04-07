import { ref } from "vue";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASURE_ID
};

const app = initializeApp(firebaseConfig)

export const currentUser = ref(null)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const backlogDB = getFirestore(app);
export const user = ref(null);


onAuthStateChanged(auth, (loggedInUser) => {
  user.value = loggedInUser;
});

export async function login() {
  const result = await signInWithPopup(auth, googleProvider);
  const loggedInUser = result.user;

  if (loggedInUser.email !== "obednegronpr@gmail.com") {
    await signOut(auth);
    alert("Log-In only works for me, Obed!");
    return;
  }

  console.log("Welcome!");
}

export async function logout() {
  await signOut(auth);
}
