import { initializeApp } from 'firebase/app'

import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    //add your own configs
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
