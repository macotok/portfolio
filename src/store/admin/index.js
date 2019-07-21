import state from '@/store/admin/state/index';
import actions from '@/store/admin/actions/index';
import mutations from '@/store/admin/mutations/index';

const admin = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default admin;
