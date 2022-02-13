import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8zEybfKvKCAkpAMfDOmkqG9NGYqh7c78",
  authDomain: "react-sa-80b97.firebaseapp.com",
  projectId: "react-sa-80b97",
  storageBucket: "react-sa-80b97.appspot.com",
  messagingSenderId: "980744214791",
  appId: "1:980744214791:web:3388577b06a332e6908da2",
  databaseURL:
    "https://react-sa-80b97-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
  await signOut(auth);
};

export const userRef = (id) => ref(database, `users/user-${id}`);
