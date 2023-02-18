import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC5NldGWD9N0i3uSjaZMREpNB2AGJseLr0',
  authDomain: 'kwame-dapaa.firebaseapp.com',
  projectId: 'kwame-dapaa',
  storageBucket: 'kwame-dapaa.appspot.com',
  messagingSenderId: '722341931001',
  appId: '1:722341931001:web:633ceaa13638ff83ebff28',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const storage = getStorage(firebase);

export default firebase;
