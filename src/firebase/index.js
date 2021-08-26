import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCy4H1ZOf37NaRyvPGU4KKur28RlmbwcWg",
    authDomain: "linkedin-clone-ecfcf.firebaseapp.com",
    projectId: "linkedin-clone-ecfcf",
    storageBucket: "linkedin-clone-ecfcf.appspot.com",
    messagingSenderId: "777121998547",
    appId: "1:777121998547:web:6245d7687bb62aa1789626",
    measurementId: "G-N97MN5D4VB"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
