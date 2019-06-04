export const MU_UPDATE_WORK = 'MU_UPDATE_WORK';
export const AC_UPDATE_WORK = 'AC_UPDATE_WORK';

const actions = {
  [AC_UPDATE_WORK](context, payload) {
    const { value, name } = payload;
    const updateData = context.state.update;
    Object.assign({}, updateData, updateData[name] = value);
    context.commit(MU_UPDATE_WORK, updateData);
  },
};

export default actions;
