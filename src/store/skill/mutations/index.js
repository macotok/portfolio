import updateInput from './updateInput';
import saveData from './saveData';
import deleteData from './deleteData';

const mutations = Object.assign(
  updateInput,
  saveData,
  deleteData,
);

export default mutations;
