import { MU_LOGIN_ADMIN } from '@/store/admin/mutations/loginAdmin';

export const AC_LOGIN_ADMIN = 'AC_LOGIN_ADMIN';

const loginAdmin = {
  [AC_LOGIN_ADMIN](context, isLoginAdmin) {
    context.commit(MU_LOGIN_ADMIN, isLoginAdmin);
  },
};

export default loginAdmin;
