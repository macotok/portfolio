import Vue from 'vue';

export const MU_SAVE_DATA = 'MU_SAVE_DATA';

const saveData = {
  [MU_SAVE_DATA](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default saveData;
