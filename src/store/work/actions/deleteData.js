import { MU_DELETE_DATA } from '../mutations/deleteData';

export const AC_DELETE_DATA = 'AC_DELETE_DATA';

const saveData = {
  [AC_DELETE_DATA](context, dataID) {
    console.log(dataID);
    context.commit(MU_DELETE_DATA);
  },
};

export default saveData;
