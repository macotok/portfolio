import { MU_UPDATE_WORK } from './mutations';

export const AC_UPDATE_WORK = 'AC_UPDATE_WORK';

const actions = {
  [AC_UPDATE_WORK](context, payload) {
    const { name } = payload;
    let { value } = payload;
    const updateData = context.state.update;
    if (name === 'tags') {
      value = value.trim() ? value.replace(/\s+/g, '').split(',') : [];
    }
    Object.assign({}, updateData, updateData[name] = value);
    context.commit(MU_UPDATE_WORK, updateData);
  },
};

export default actions;
