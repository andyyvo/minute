import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "minute-802a0.firebaseapp.com",
    databaseURL: "https://minute-802a0-default-rtdb.firebaseio.com/",
    projectId: "minute-802a0",
    storageBucket: "minute-802a0.appspot.com",
    messagingSenderId: "1026593178778",
    appId: "1:1026593178778:web:e926c9975ac726da388b23",
    measurementId: "G-18ZXNJ4Y6L",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };