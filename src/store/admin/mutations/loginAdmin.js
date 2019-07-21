import Vue from 'vue';

export const MU_LOGIN_ADMIN = 'MU_LOGIN_ADMIN';

const loginAdmin = {
  [MU_LOGIN_ADMIN](state, payload) {
    Vue.set(state, 'isLoginAdmin', payload);
  },
};

export default loginAdmin;
