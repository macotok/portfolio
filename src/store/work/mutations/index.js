import updateInput from './updateInput';
import updateInputOfEdit from './updateInputOfEdit';
import saveData from './saveData';
import deleteData from './deleteData';
import pagerNumber from './pagerNumber';

const mutations = Object.assign(
  updateInput,
  updateInputOfEdit,
  saveData,
  deleteData,
  pagerNumber,
);

export default mutations;
