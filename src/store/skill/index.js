import state from '@/store/skill/state/index';
import actions from '@/store/skill/actions/index';
import mutations from '@/store/skill/mutations/index';

const skill = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default skill;
