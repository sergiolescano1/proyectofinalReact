import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzl3O_FZcY5KaIGeVB4JzE8VQdVQWmejA",
  authDomain: "entregareact-2bbfa.firebaseapp.com",
  projectId: "entregareact-2bbfa",
  storageBucket: "entregareact-2bbfa.appspot.com",
  messagingSenderId: "1007950226102",
  appId: "1:1007950226102:web:283061e768b945f558fc17",
  measurementId: "G-LN9EBMHLBM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);