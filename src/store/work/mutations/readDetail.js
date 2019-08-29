import Vue from 'vue';

export const MU_READ_WORK_DETAIL = 'MU_READ_WORK_DETAIL';

const readDetail = {
  [MU_READ_WORK_DETAIL](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default readDetail;
