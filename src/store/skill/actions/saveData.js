import dateFns from 'date-fns';
import { FIREBASE_SKILL } from '@/defines';
import postServer from '@/server/POST';
import putServer from '@/server/PUT';
import { MU_SAVE_DATA } from '@/store/skill/mutations/saveData';

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
        updatedAt: dateFns.format(new Date()),
      };
      stateDB.splice(editIdOfArray, 1, updateData);
      if (process.env.SWITCH_DATABASE === 'production') {
        putServer(stateDB[editIdOfArray], updateData, FIREBASE_SKILL);
      }
    // 新規画面でstateのDBを追加
    } else {
      const newID = stateDB.reduce((id, data) => (id < data.id ? data.id : id), 0) + 1;
      addOtherData = {
        id: newID,
        updatedAt: dateFns.format(new Date()),
        createdAt: dateFns.format(new Date()),
      };
      const payload = Object.assign({}, { ...context.state.update }, { ...addOtherData });
      stateDB.push(payload);
      if (process.env.SWITCH_DATABASE === 'production') {
        postServer(payload, FIREBASE_SKILL);
      }
    }
    context.commit(MU_SAVE_DATA, stateDB);
  },
};

export default saveData;
