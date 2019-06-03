import state from './state';
import actions from './actions';
import mutations from './mutations';

const work = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default work;
