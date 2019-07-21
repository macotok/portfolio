import { MU_LOGIN_ADMIN } from '@/store/admin/mutations';

export const AC_LOGIN_ADMIN = 'AC_LOGIN_ADMIN';

const loginAdmin = {
  [AC_LOGIN_ADMIN](context, isAdmin) {
    console.log(isAdmin)
  },
};

export default loginAdmin;
