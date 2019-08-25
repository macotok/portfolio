import updateInput from '@/store/skill/actions/updateInput';
import updateInputOfEdit from '@/store/skill/actions/updateInputOfEdit';
import resetInputData from '@/store/skill/actions/resetInputData';
import saveData from '@/store/skill/actions/saveData';
import deleteData from '@/store/skill/actions/deleteData';
import readTopList from '@/store/skill/actions/readTopList';

const actions = Object.assign(
  updateInput,
  updateInputOfEdit,
  resetInputData,
  saveData,
  deleteData,
  readTopList,
);

export default actions;
