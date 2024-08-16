
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBr0QFaMlcWfJmx8k-SAZXDd15CwFKOFw8",
  authDomain: "flashcard-app-11695.firebaseapp.com",
  projectId: "flashcard-app-11695",
  storageBucket: "flashcard-app-11695.appspot.com",
  messagingSenderId: "18861294265",
  appId: "1:18861294265:web:e266ac345223146f5bd168"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;