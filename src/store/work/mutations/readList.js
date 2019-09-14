import Vue from 'vue';

export const MU_READ_WORK_LIST = 'MU_READ_WORK_LIST';

const readList = {
  [MU_READ_WORK_LIST](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default readList;
