import updateInput from '@/store/work/mutations/updateInput';
import updateInputOfEdit from '@/store/work/mutations/updateInputOfEdit';
import resetInputData from '@/store/work/mutations/resetInputData';
import saveData from '@/store/work/mutations/saveData';
import deleteData from '@/store/work/mutations/deleteData';
import pagerNumber from '@/store/work/mutations/pagerNumber';
import readTopList from '@/store/work/mutations/readTopList';
import readDetail from '@/store/work/mutations/readDetail';

const mutations = Object.assign(
  updateInput,
  updateInputOfEdit,
  resetInputData,
  saveData,
  deleteData,
  pagerNumber,
  readTopList,
  readDetail,
);

export default mutations;
