import state from './state/index';
import actions from './actions/index';
import mutations from './mutations/index';

const skill = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default skill;
