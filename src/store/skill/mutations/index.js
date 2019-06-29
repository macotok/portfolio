import updateInput from '@/store/skill/mutations/updateInput';
import updateInputOfEdit from '@/store/skill/mutations/updateInputOfEdit';
import resetInputData from '@/store/skill/mutations/resetInputData';
import saveData from '@/store/skill/mutations/saveData';
import deleteData from '@/store/skill/mutations/deleteData';

const mutations = Object.assign(
  updateInput,
  updateInputOfEdit,
  resetInputData,
  saveData,
  deleteData,
);

export default mutations;
