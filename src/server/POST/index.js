import { firestore, storage } from '@/server/firebase';

function postServer(payload, targetCollection) {
  const storageRef = storage.ref();
  const imagesRef = storageRef.child(`images/${targetCollection}/${payload.id}_${payload.image.name}`);
  imagesRef.putString(payload.image.path, 'data_url')
    .then((snapshot) => {
      const starsRef = storageRef.child(snapshot.metadata.fullPath);
      starsRef.getDownloadURL()
        .then((url) => {
          const updateImage = {
            image: {
              path: url,
              name: payload.image.name,
            },
          };
          const concatData = Object.assign({}, { ...payload }, { ...updateImage });
          firestore.collection(targetCollection).doc((concatData.id).toString(10)).set(concatData);
        });
    });
}

export default postServer;
