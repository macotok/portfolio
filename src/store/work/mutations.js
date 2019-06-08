import Vue from 'vue';

export const MU_INPUT_UPDATE_WORK = 'MU_INPUT_UPDATE_WORK';
export const MU_SAVE_WORK = 'MU_SAVE_WORK';

const mutations = {
  [MU_INPUT_UPDATE_WORK](state, payload) {
    Vue.set(state, 'update', payload);
  },
  [MU_SAVE_WORK](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default mutations;
