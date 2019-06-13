import updateInput from './updateInput';
import saveData from './saveData';
import deleteData from './deleteData';
import pagerNumber from './pagerNumber';

const mutations = Object.assign(
  updateInput,
  saveData,
  deleteData,
  pagerNumber,
);

export default mutations;
