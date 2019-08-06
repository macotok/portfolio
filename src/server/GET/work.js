import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';

const work = () => {
  const workData = [];
  firestore.collection(FIREBASE_WORK).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      workData.push(doc.data());
    });
  });
  return workData;
};

export default work;
