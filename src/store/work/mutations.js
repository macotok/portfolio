import Vue from 'vue';

export const MU_UPDATE_WORK = 'MU_UPDATE_WORK';

const mutations = {
  [MU_UPDATE_WORK](state, payload) {
    Vue.set(state, 'update', payload);
  },
};

export default mutations;
