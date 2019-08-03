import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';

const works = () => {
  const worksData = [];
  firestore.collection(FIREBASE_WORK).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      worksData.push(doc.data());
    });
  });
  return worksData;
};

export default works;
