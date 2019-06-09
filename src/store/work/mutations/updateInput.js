import Vue from 'vue';

export const MU_UPDATE_INPUT_WORK = 'MU_UPDATE_INPUT_WORK';

const updateInput = {
  [MU_UPDATE_INPUT_WORK](state, payload) {
    Vue.set(state, 'update', payload);
  },
};

export default updateInput;
