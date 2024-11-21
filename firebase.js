
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import {  getFirestore, collection, addDoc,getDocs ,doc, setDoc,updateDoc,serverTimestamp , arrayUnion, arrayRemove ,deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "AIzaSyCnSNwkeEcunjL-FmMuas39jAmAkcTjGME",
   authDomain: "loginsignup-83773.firebaseapp.com",
   projectId: "loginsignup-83773",
   storageBucket: "loginsignup-83773.firebasestorage.app",
   messagingSenderId: "800072638687",
   appId: "1:800072638687:web:8d4b748c629e3d8cf2c96a",
   measurementId: "G-EYT4PCZ5X4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export { auth,getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword,
     onAuthStateChanged,  signOut,signInWithPopup, 
     provider,getFirestore,db ,collection, addDoc,getDocs, doc, setDoc ,updateDoc,serverTimestamp, 
     arrayUnion, arrayRemove,deleteDoc }