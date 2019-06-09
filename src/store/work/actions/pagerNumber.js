import { MU_PAGER_NUMBER } from '../mutations/pagerNumber';

export const AC_PAGER_NUMBER = 'AC_PAGER_NUMBER';

const pagerNumber = {
  [AC_PAGER_NUMBER](context, payload) {
    const { currentPagerNumber } = payload;
    context.commit(MU_PAGER_NUMBER, currentPagerNumber);
  },
};

export default pagerNumber;
