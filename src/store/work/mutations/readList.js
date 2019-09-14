import Vue from 'vue';

export const MU_READ_WORK_LIST = 'MU_READ_WORK_LIST';
export const MU_WORK_DB_LENGTH = 'MU_WORK_DB_LENGTH';

const readList = {
  [MU_READ_WORK_LIST](state, payload) {
    Vue.set(state, 'db', payload);
  },
  [MU_WORK_DB_LENGTH](state, dbLength) {
    Vue.set(state, 'dbLength', dbLength);
  },
};

export default readList;
