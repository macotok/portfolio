import Vue from 'vue';

export const MU_DELETE_DATA = 'MU_DELETE_DATA';

const deleteData = {
  [MU_DELETE_DATA](state, payload) {
    Vue.set(state, 'db', payload);
  },
};

export default deleteData;
