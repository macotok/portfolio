import { MU_INPUT_UPDATE_WORK, MU_SAVE_WORK } from './mutations';

export const AC_INPUT_UPDATE_WORK = 'AC_INPUT_UPDATE_WORK';
export const AC_SAVE_WORK = 'AC_SAVE_WORK';

const actions = {
  [AC_INPUT_UPDATE_WORK](context, payload) {
    const { name } = payload;
    let { value } = payload;
    const updateData = context.state.update;
    if (name === 'tags') {
      value = value.trim() ? value.replace(/\s+/g, '').split(',') : [];
    }
    Object.assign({}, updateData, updateData[name] = value);
    context.commit(MU_INPUT_UPDATE_WORK, updateData);
  },
  [AC_SAVE_WORK](context) {
    const updateData = context.state.update;
    context.commit(MU_SAVE_WORK, updateData);
  },
};

export default actions;
