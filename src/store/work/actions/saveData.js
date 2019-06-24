import moment from 'moment';
import { MU_SAVE_DATA } from '../mutations/saveData';

export const AC_SAVE_DATA = 'AC_SAVE_DATA';

const saveData = {
  [AC_SAVE_DATA](context) {
    const stateDB = context.state.db;
    const editID = context.state.update.id;
    let addOtherData;
    // 編集画面でstateのDBを更新
    if (editID) {
      const editIdOfArray = stateDB.findIndex(state => state.id === editID);
      const updateData = {
        ...stateDB[editIdOfArray],
        ...context.state.update,
        updatedAt: moment().format(),
      };
      stateDB.splice(editIdOfArray, 1, updateData);
    // 新規画面でstateのDBを追加
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
