import firestore from './firestore';

const worksData = [];
firestore.collection('works').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    worksData.push(doc.data());
  });
});

const skillData = [];
firestore.collection('skill').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    skillData.push(doc.data());
  });
});

const database = {
  works: worksData,
  skill: skillData,
};

export default database;
