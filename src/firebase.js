import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJz4RdsVB1V7KljPhcOJUND65nMp0MuzI",
    authDomain: "clone-3add0.firebaseapp.com",
    projectId: "clone-3add0",
    storageBucket: "clone-3add0.appspot.com",
    messagingSenderId: "956560764188",
    appId: "1:956560764188:web:975464d236d10799eb9ed9",
    measurementId: "G-FYVVE0T072"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }