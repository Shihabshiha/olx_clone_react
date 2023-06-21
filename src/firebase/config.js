
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyApCnsUhxXTT9AJ8kqwdpch83TRQ0-PSx4",
  authDomain: "olx-clone-4b492.firebaseapp.com",
  projectId: "olx-clone-4b492",
  storageBucket: "olx-clone-4b492.appspot.com",
  messagingSenderId: "885730823225",
  appId: "1:885730823225:web:9e9976a06906e822f711e8",
  measurementId: "G-DJK8S8V22D" 
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };



