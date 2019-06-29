import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: 'portfolio-205d8',
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage };
