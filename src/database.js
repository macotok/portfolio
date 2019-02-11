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

let worksData = {};
db.collection('works').get().then((snapshot) => {
  snapshot.forEach((doc) => {
    worksData = doc.data();
  });
});

let skillData = {};
db.collection('skill').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    skillData = Object.assign({}, { ...skillData }, { ...doc.data() });
  });
});

const database = {
  works: worksData,
  skill: skillData,
};

export default database;
