import dateFns from 'date-fns';
import { firestore, storage } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';
import postServer from '@/server/POST';
import { MU_SAVE_DATA } from '@/store/work/mutations/saveData';

export const AC_SAVE_DATA = 'AC_SAVE_DATA';

const saveData = {
  [AC_SAVE_DATA](context) {
    const stateDB = context.state.db;
    const editID = context.state.update.id;
    // 編集画面でstateのDBを更新
    if (editID) {
      const editIdOfArray = stateDB.findIndex(state => state.id === editID);
      const updateData = {
        ...stateDB[editIdOfArray],
        ...context.state.update,
        updatedAt: dateFns.format(new Date()),
      };
      stateDB.splice(editIdOfArray, 1, updateData);
      if (process.env.SWITCH_DATABASE === 'production') {
        if ((updateData.image.path).indexOf('https:') === 0) {
          firestore.collection(FIREBASE_WORK)
            .doc((updateData.id).toString(10))
            .update(updateData)
            .then(() => {
              context.commit(MU_SAVE_DATA, stateDB);
            });
        } else {
          const storageRef = storage.ref();
          const imagesRef = storageRef.child(`images/${FIREBASE_WORK}/${updateData.id}/${updateData.image.name}`);
          imagesRef.putString(updateData.image.path, 'data_url')
            .then((snapshot) => {
              const starsRef = storageRef.child(snapshot.metadata.fullPath);
              starsRef.getDownloadURL()
                .then((url) => {
                  const updateOtherData = {
                    image: {
                      path: url,
                      name: updateData.image.name,
                    },
                  };
                  firestore.collection(FIREBASE_WORK)
                    .doc((updateData.id).toString(10))
                    .update(Object.assign({}, { ...updateData }, { ...updateOtherData }));
                })
                .then(() => {
                  context.commit(MU_SAVE_DATA, stateDB);
                });
            });
        }
      } else {
        context.commit(MU_SAVE_DATA, stateDB);
      }
    } else {
      // 新規画面でstateのDBを追加
      const newID = stateDB.reduce((id, data) => (id < data.id ? data.id : id), 0) + 1;
      const addOtherData = {
        id: newID,
        updatedAt: dateFns.format(new Date()),
        createdAt: dateFns.format(new Date()),
      };
      const payload = Object.assign({}, { ...context.state.update }, { ...addOtherData });
      stateDB.push(payload);
      if (process.env.SWITCH_DATABASE === 'production') {
        postServer(payload, FIREBASE_WORK);
      }
      context.commit(MU_SAVE_DATA, stateDB);
    }
  },
};

export default saveData;
