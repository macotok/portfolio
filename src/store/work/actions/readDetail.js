import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';
import db from '@/store/stub';
import { MU_READ_WORK_DETAIL } from '@/store/work/mutations/readDetail';

export const AC_READ_WORK_DETAIL = 'AC_READ_WORK_DETAIL';

const readDetail = {
  [AC_READ_WORK_DETAIL](context, paramsID) {
    switch (process.env.SWITCH_DATABASE) {
      case 'development': {
        const workDB = db.work[paramsID];
        context.commit(MU_READ_WORK_DETAIL, workDB);
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
            const workDB = data[paramsID];
            context.commit(MU_READ_WORK_DETAIL, workDB);
          });
        break;
      }
      default:
        break;
    }
  },
};

export default readDetail;
