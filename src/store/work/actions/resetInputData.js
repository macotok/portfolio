import { MU_RESET_INPUT_DATA } from '../mutations/resetInputData';
import inputDataList from '@/store/work/state/inputDataList';

export const AC_RESET_INPUT_DATA = 'AC_RESET_INPUT_DATA';

const resetInputData = {
  [AC_RESET_INPUT_DATA](context) {
    context.commit(MU_RESET_INPUT_DATA, inputDataList);
  },
};

export default resetInputData;
