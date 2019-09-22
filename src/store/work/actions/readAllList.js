import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';
import db from '@/store/stub';
import { MU_READ_WORK_ALL_LIST } from '@/store/work/mutations/readAllList';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export const AC_READ_WORK_ALL_LIST = 'AC_READ_WORK_ALL_LIST';

const readAllList = {
  [AC_READ_WORK_ALL_LIST](context) {
    switch (process.env.SWITCH_DATABASE) {
      case 'development': {
        context.commit(MU_READ_WORK_ALL_LIST, sortUpdatedAt(db.work));
        break;
      }
      case 'production': {
        firestore.collection(FIREBASE_WORK).get()
          .then((querySnapshot) => {
            const workData = [];
            querySnapshot.forEach((doc) => {
              workData.push(doc.data());
            });
            return workData;
          })
          .then((data) => {
            context.commit(MU_READ_WORK_ALL_LIST, sortUpdatedAt(data));
          });
        break;
      }
      default:
        break;
    }
  },
};

export default readAllList;
