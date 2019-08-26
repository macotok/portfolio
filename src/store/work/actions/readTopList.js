import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';
import db from '@/store/stub';
import { MU_READ_WORK_TOP_LIST } from '@/store/work/mutations/readTopList';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export const AC_READ_WORK_TOP_LIST = 'AC_READ_WORK_TOP_LIST';

const readTopList = {
  [AC_READ_WORK_TOP_LIST](context, displayLength) {
    switch (process.env.SWITCH_DATABASE) {
      case 'development': {
        const workDB = (sortUpdatedAt(db.work)).splice(0, displayLength);
        context.commit(MU_READ_WORK_TOP_LIST, workDB);
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
            const workDB = sortUpdatedAt(data).splice(0, displayLength);
            context.commit(MU_READ_WORK_TOP_LIST, workDB);
          });
        break;
      }
      default:
        break;
    }
  },
};

export default readTopList;
