import Vue from 'vue';

export const MU_UPDATE_INPUT = 'MU_UPDATE_INPUT';

const updateInput = {
  [MU_UPDATE_INPUT](state, payload) {
    Vue.set(state, 'update', payload);
  },
};

export default updateInput;
