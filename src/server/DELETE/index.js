import { firestore, storage } from '@/server/firebase';

function deleteServer(payload, targetCollection) {
  const storageRef = storage.ref();
  const imagesRef = storageRef.child(`images/${targetCollection}/${payload.id}/${payload.image.name}`);
  imagesRef.delete().then(() => {
    firestore.collection(targetCollection).doc(payload.id.toString(10)).delete();
  });
}

export default deleteServer;
