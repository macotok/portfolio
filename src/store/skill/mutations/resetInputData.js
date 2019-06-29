import Vue from 'vue';

export const MU_RESET_INPUT_DATA = 'MU_RESET_INPUT_DATA';

const resetInputData = {
  [MU_RESET_INPUT_DATA](state, payload) {
    Vue.set(state, 'update', payload);
  },
};

export default resetInputData;
