import { firestore, storage } from '@/server/firebase';

function putServer(stateData, payload, targetCollection) {
  const storageRef = storage.ref();
  const imagesRef = storageRef.child(`images/${targetCollection}/${payload.id}_${payload.image.name}`);
  imagesRef.putString(payload.image.path, 'data_url')
    .then((snapshot) => {
      const starsRef = storageRef.child(snapshot.metadata.fullPath);
      starsRef.getDownloadURL()
        .then((url) => {
          const updateOtherData = {
            image: {
              path: url,
              name: payload.image.name,
            },
          };
          const concatData = Object.assign({}, { ...payload }, { ...updateOtherData });
          firestore.collection(targetCollection)
            .doc((payload.id).toString(10))
            .update(concatData);
        });
    });
}

export default putServer;
