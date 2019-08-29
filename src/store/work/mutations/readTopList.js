import Vue from 'vue';
import _ from 'lodash';

export const MU_READ_WORK_TOP_LIST = 'MU_READ_WORK_TOP_LIST';

const readTopList = {
  [MU_READ_WORK_TOP_LIST](state, payload) {
    Vue.set(state, 'db', _.mapKeys(payload, v => v.id));
  },
};

export default readTopList;
