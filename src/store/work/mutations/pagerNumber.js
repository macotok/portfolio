import Vue from 'vue';

export const MU_PAGER_NUMBER = 'MU_PAGER_NUMBER';

const saveData = {
  [MU_PAGER_NUMBER](state, payload) {
    Vue.set(state, 'pagerNumber', payload);
  },
};

export default saveData;
