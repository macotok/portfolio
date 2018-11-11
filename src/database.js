import firebase from 'firebase';

const config = {
  apiKey: process.env.FIRE_BASE.API_KEY,
  authDomain: process.env.FIRE_BASE.AUTH_DOMAIN,
  databaseURL: process.env.FIRE_BASE.DATABASE_URL,
  projectId: process.env.FIRE_BASE.PROJECT_ID,
  storageBucket: process.env.FIRE_BASE.STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_BASE.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

let worksData = {};
db.collection('works').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    worksData = doc.data();
  });
});

const database = {
  works: worksData,
};

export default database;
