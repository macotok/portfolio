import Vue from 'vue';

export const MU_READ_TOP_LIST = 'MU_READ_TOP_LIST';

const readTopList = {
  [MU_READ_TOP_LIST](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default readTopList;
