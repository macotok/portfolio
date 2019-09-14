import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';
import db from '@/store/stub';
import { MU_READ_WORK_LIST, MU_WORK_DB_LENGTH } from '@/store/work/mutations/readList';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export const AC_READ_WORK_LIST = 'AC_READ_WORK_LIST';

const readList = {
  [AC_READ_WORK_LIST](context, displayList) {
    const { targetState, displayLength } = displayList;
    switch (process.env.SWITCH_DATABASE) {
      case 'development': {
        context.commit(MU_WORK_DB_LENGTH, (db.work).length);
        const workDB = sortUpdatedAt(db.work).splice(
          (targetState ? (targetState.pagerNumber - 1) : 0) * displayLength, displayLength,
        );
        context.commit(MU_READ_WORK_LIST, workDB);
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
            context.commit(MU_WORK_DB_LENGTH, data.length);
            const workDB = sortUpdatedAt(data).splice(
              (targetState ? (targetState.pagerNumber - 1) : 0) * displayLength, displayLength,
            );
            context.commit(MU_READ_WORK_LIST, workDB);
          });
        break;
      }
      default:
        break;
    }
  },
};

export default readList;
