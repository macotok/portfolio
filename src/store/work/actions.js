export const MU_UPDATE_WORK = 'MU_UPDATE_WORK';
export const AC_UPDATE_WORK = 'AC_UPDATE_WORK';

const actions = {
  [AC_UPDATE_WORK](context, payload) {
    context.commit(MU_UPDATE_WORK, payload);
  },
};

export default actions;
