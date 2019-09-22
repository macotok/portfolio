import updateInput from '@/store/work/mutations/updateInput';
import updateInputOfEdit from '@/store/work/mutations/updateInputOfEdit';
import resetInputData from '@/store/work/mutations/resetInputData';
import saveData from '@/store/work/mutations/saveData';
import deleteData from '@/store/work/mutations/deleteData';
import pagerNumber from '@/store/work/mutations/pagerNumber';
import readList from '@/store/work/mutations/readList';
import readAllList from '@/store/work/mutations/readAllList';

const mutations = Object.assign(
  updateInput,
  updateInputOfEdit,
  resetInputData,
  saveData,
  deleteData,
  pagerNumber,
  readList,
  readAllList,
);

export default mutations;
