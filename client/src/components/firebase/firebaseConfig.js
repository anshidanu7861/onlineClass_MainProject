// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi0FoQInSedop66cXIqhZDt6SOq_bbRg4",
  authDomain: "phoenix-af251.firebaseapp.com",
  projectId: "phoenix-af251",
  storageBucket: "phoenix-af251.appspot.com",
  messagingSenderId: "285771008841",
  appId: "1:285771008841:web:40159b8c780067c047a898",
  measurementId: "G-6S0GP4BSRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
