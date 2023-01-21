// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK57Ml6VoekQC1Q8b05ZDDeQtTmpqdDiY",
    authDomain: "proyectofinalcoderhouse-39f92.firebaseapp.com",
    projectId: "proyectofinalcoderhouse-39f92",
    storageBucket: "proyectofinalcoderhouse-39f92.appspot.com",
    messagingSenderId: "188907813956",
    appId: "1:188907813956:web:08872c338264ace3c8d011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)