import { initializeApp } from 'firebase/app'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_SECRET_KEY,
    authDomain: "coffee-cb7ca.firebaseapp.com",
    projectId: "coffee-cb7ca",
    storageBucket: "coffee-cb7ca.appspot.com",
    messagingSenderId: "486618501814",
    appId: process.env.REACT_APP_FB_SECRET_APPID,
    measurementId: "G-JE7VGW37ZG"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
