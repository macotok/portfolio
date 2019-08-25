import db from '@/store/stub';
import { MU_READ_TOP_LIST } from '@/store/work/mutations/readTopList';

export const AC_READ_TOP_LIST = 'AC_READ_TOP_LIST';

const readTopList = {
  [AC_READ_TOP_LIST](context, displayLength) {
    if (process.env.SWITCH_DATABASE === 'development') {
      const workDB = (db.work).splice(0, displayLength);
      context.commit(MU_READ_TOP_LIST, workDB);
    }
  },
};

export default readTopList;
