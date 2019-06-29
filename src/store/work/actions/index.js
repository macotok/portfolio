import updateInput from '@/store/work/actions/updateInput';
import updateInputOfEdit from '@/store/work/actions/updateInputOfEdit';
import resetInputData from '@/store/work/actions/resetInputData';
import saveData from '@/store/work/actions/saveData';
import deleteData from '@/store/work/actions/deleteData';
import pagerNumber from '@/store/work/actions/pagerNumber';

const actions = Object.assign(
  updateInput,
  updateInputOfEdit,
  resetInputData,
  saveData,
  deleteData,
  pagerNumber,
);

export default actions;
