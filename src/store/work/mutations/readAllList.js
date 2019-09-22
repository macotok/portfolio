import Vue from 'vue';

export const MU_READ_WORK_ALL_LIST = 'MU_READ_WORK_ALL_LIST';

const readAllList = {
  [MU_READ_WORK_ALL_LIST](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default readAllList;
