import { MU_UPDATE_WORK } from './actions';

const mutations = {
  [MU_UPDATE_WORK](state, inputData) {
    const { value, name } = inputData;
    const updateData = state.update;
    Object.assign({}, updateData, updateData[name] = value);
  },
};

export default mutations;
