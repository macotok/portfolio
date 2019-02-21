import firestore from './firestore';

const works = () => {
  const worksData = [];
  firestore.collection('works').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      worksData.push(doc.data());
    });
  });
  return worksData;
};

export default works;
