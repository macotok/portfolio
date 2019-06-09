export const AC_PAGINATION_NUMBER = 'AC_PAGINATION_NUMBER';

const paginationNumber = {
  [AC_PAGINATION_NUMBER](context, payload) {
    console.log(payload)
  },
};

export default paginationNumber;
