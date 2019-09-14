import { firestore } from '@/server/firebase';
import { FIREBASE_WORK } from '@/defines';
import db from '@/store/stub';
import { MU_READ_WORK_LIST } from '@/store/work/mutations/readList';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export const AC_READ_WORK_LIST = 'AC_READ_WORK_LIST';

const readList = {
  [AC_READ_WORK_LIST](context, displayList) {
    const { sliceRange, displayLength } = displayList;
    switch (process.env.SWITCH_DATABASE) {
      case 'development': {
        const workDB = (sortUpdatedAt(db.work)).slice(sliceRange, displayLength);
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
            const workDB = sortUpdatedAt(data).splice(sliceRange, displayLength);
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
