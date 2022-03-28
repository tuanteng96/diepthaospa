import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyATb5EFG5wvYV700LeFL2zP-3oaFSCyENE",
    authDomain: "diepthao-d249b.firebaseapp.com",
    projectId: "diepthao-d249b",
    storageBucket: "diepthao-d249b.appspot.com",
    messagingSenderId: "174637707622",
    appId: "1:174637707622:web:91819ada66e67736ab58a7",
    measurementId: "G-FCVB9NBBKV"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };