import Vue from 'vue';

export const MU_UPDATE_INPUT_OF_EDIT = 'MU_UPDATE_INPUT_OF_EDIT';

const updateInputOfEdit = {
  [MU_UPDATE_INPUT_OF_EDIT](state, payload) {
    Vue.set(state, 'update', payload);
  },
};

export default updateInputOfEdit;
