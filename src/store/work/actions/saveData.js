import moment from 'moment';
import { MU_SAVE_DATA } from '../mutations/saveData';

export const AC_SAVE_DATA = 'AC_SAVE_DATA';

const saveData = {
  [AC_SAVE_DATA](context, editId) {
    const stateDB = context.state.db;
    let addOtherData;
    if (editId) {
      const editData = stateDB.find(state => state.id === editId);
      addOtherData = {
        updatedAt: moment().format(),
      };
      Object.assign({}, { ...context.state.update }, { ...addOtherData });
    } else {
      const newID = stateDB.reduce((id, data) => (id < data.id ? data.id : id), 0) + 1;
      addOtherData = {
        id: newID,
        updatedAt: moment().format(),
        createdAt: moment().format(),
      };
      stateDB.push(Object.assign({}, { ...context.state.update }, { ...addOtherData }));
    }
    context.commit(MU_SAVE_DATA, stateDB);
  },
};

export default saveData;
