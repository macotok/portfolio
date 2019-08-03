import { firestore } from '@/server/firebase';
import { FIREBASE_SKILL } from '@/defines';

const skill = () => {
  const skillData = [];
  firestore.collection(FIREBASE_SKILL).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      skillData.push(doc.data());
    });
  });
  return skillData;
};

export default skill;
