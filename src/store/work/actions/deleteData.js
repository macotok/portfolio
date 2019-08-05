import { FIREBASE_WORK } from '@/defines';
import { MU_DELETE_DATA } from '@/store/work/mutations/deleteData';
import deleteServer from '@/server/DELETE';

export const AC_DELETE_DATA = 'AC_DELETE_DATA';

const deleteData = {
  [AC_DELETE_DATA](context, dataID) {
    const dataList = context.state.db;
    const listNumber = dataList.findIndex(data => data.id === dataID);
    const payload = dataList.find(data => data.id === dataID);
    dataList.splice(listNumber, 1);
    context.commit(MU_DELETE_DATA, dataList);
    deleteServer(payload, FIREBASE_WORK);
  },
};

export default deleteData;
