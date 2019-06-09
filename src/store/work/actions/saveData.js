import moment from 'moment';
import { MU_SAVE_WORK } from '../mutations';

export const AC_SAVE_WORK = 'AC_SAVE_WORK';

const saveData = {
  [AC_SAVE_WORK](context) {
    const stateDB = context.state.db;
    const newId = stateDB.reduce((id, data) => (id < data.id ? data.id : id), 0) + 1;
    const addOtherData = {
      id: newId,
      updatedAt: moment().format(),
      createdAt: moment().format(),
    };
    stateDB.push(Object.assign({}, { ...context.state.update }, { ...addOtherData }));
    context.commit(MU_SAVE_WORK, stateDB);
  },
};

export default saveData;
