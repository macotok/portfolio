import Vue from 'vue';
import { MU_UPDATE_WORK } from './actions';

const mutations = {
  [MU_UPDATE_WORK](state, payload) {
    Vue.set(state, 'update', payload);
  },
};

export default mutations;
