import updateInput from '@/store/skill/actions/updateInput';
import updateInputOfEdit from '@/store/skill/actions/updateInputOfEdit';
import resetInputData from '@/store/skill/actions/resetInputData';
import saveData from '@/store/skill/actions/saveData';
import deleteData from '@/store/skill/actions/deleteData';
import readList from '@/store/skill/actions/readList';

const actions = Object.assign(
  updateInput,
  updateInputOfEdit,
  resetInputData,
  saveData,
  deleteData,
  readList,
);

export default actions;
