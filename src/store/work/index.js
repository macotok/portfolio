import state from '@/store/work/state/index';
import actions from '@/store/work/actions/index';
import mutations from '@/store/work/mutations/index';

const work = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default work;
