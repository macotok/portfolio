import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';

const work = () => {
  firestore.collection(FIREBASE_WORK).get().then((querySnapshot) => {
    const workData = [];
    querySnapshot.forEach((doc) => {
      workData.push(doc.data());
    });
    return workData;
  });
};

export default work;
