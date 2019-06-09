import state from './state/index';
import actions from './actions/index';
import mutations from './mutations';

const work = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default work;
