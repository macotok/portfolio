import Vue from 'vue';

export const MU_SAVE_WORK = 'MU_SAVE_WORK';

const saveData = {
  [MU_SAVE_WORK](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default saveData;
