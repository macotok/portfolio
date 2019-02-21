import firestore from './firestore';

const skill = () => {
  const skillData = [];
  firestore.collection('skill').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      skillData.push(doc.data());
    });
  });
  return skillData;
};

export default skill;
