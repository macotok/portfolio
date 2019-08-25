import { firestore } from '@/server/firebase';
import { FIREBASE_SKILL } from '@/defines';
import db from '@/store/stub';
import { MU_SKILL_TOP_LIST } from '@/store/skill/mutations/readTopList';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export const AC_SKILL_TOP_LIST = 'AC_SKILL_TOP_LIST';

const readTopList = {
  [AC_SKILL_TOP_LIST](context) {
    switch (process.env.SWITCH_DATABASE) {
      case 'development': {
        const skillDB = (sortUpdatedAt(db.skill));
        context.commit(MU_SKILL_TOP_LIST, skillDB);
        break;
      }
      case 'production': {
        firestore.collection(FIREBASE_SKILL).get()
          .then((querySnapshot) => {
            const skillData = [];
            querySnapshot.forEach((doc) => {
              skillData.push(doc.data());
            });
            return skillData;
          })
          .then((data) => {
            const skillDB = sortUpdatedAt(data);
            context.commit(MU_SKILL_TOP_LIST, skillDB);
          });
        break;
      }
      default:
        break;
    }
  },
};

export default readTopList;
