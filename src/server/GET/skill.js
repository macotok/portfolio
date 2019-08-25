import { firestore } from '@/server/firebase';
import { FIREBASE_SKILL } from '@/defines';

const skill = () => {
  firestore.collection(FIREBASE_SKILL).get().then((querySnapshot) => {
    const skillData = [];
    querySnapshot.forEach((doc) => {
      skillData.push(doc.data());
    });
    return skillData;
  });
};

export default skill;
