import { firestore, storage } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';
import { MU_DELETE_DATA } from '@/store/work/mutations/deleteData';

export const AC_DELETE_DATA = 'AC_DELETE_DATA';

const deleteData = {
  [AC_DELETE_DATA](context, dataID) {
    switch (process.env.SWITCH_DATABASE) {
      case 'development': {
        const dataList = context.state.db;
        dataList.splice(dataList.findIndex(data => data.id === dataID), 1);
        context.commit(MU_DELETE_DATA, dataList);
        break;
      }
      case 'production': {
        const storageRef = storage.ref();
        const dataList = context.state.db;
        const payload = dataList.find(data => data.id === dataID);
        const imagesRef = storageRef.child(`images/${FIREBASE_WORK}/${payload.id}/${payload.image.name}`);
        imagesRef.delete()
          .then(() => {
            firestore.collection(FIREBASE_WORK).doc(payload.id.toString(10)).delete();
          })
          .then(() => {
            dataList.splice(dataList.findIndex(data => data.id === dataID), 1);
            context.commit(MU_DELETE_DATA, dataList);
          });
        break;
      }
      default:
        break;
    }
  },
};

export default deleteData;
