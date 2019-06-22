import { MU_DELETE_DATA } from '../mutations/deleteData';

export const AC_DELETE_DATA = 'AC_DELETE_DATA';

const deleteData = {
  [AC_DELETE_DATA](context, dataID) {
    const dataList = context.state.db;
    const listNumber = dataList.findIndex(data => data.id === dataID);
    dataList.splice(listNumber, 1);
    context.commit(MU_DELETE_DATA, dataList);
  },
};

export default deleteData;
