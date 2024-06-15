import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDxrhBs7gL2K9p_dtEvY1yKXjiiFEr1dd8",
  authDomain: "practice-alap.firebaseapp.com",
  projectId: "practice-alap",
  storageBucket: "practice-alap.appspot.com",
  messagingSenderId: "168926623729",
  appId: "1:168926623729:web:ccce256fa5c43046a5f650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig