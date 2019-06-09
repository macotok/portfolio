import { MU_UPDATE_INPUT_WORK } from '../mutations/updateInput';

export const AC_UPDATE_INPUT_WORK = 'AC_UPDATE_INPUT_WORK';

const updateInput = {
  [AC_UPDATE_INPUT_WORK](context, payload) {
    const { name } = payload;
    let { value } = payload;
    const updateData = context.state.update;
    if (name === 'tags') {
      value = value.trim() ? value.replace(/\s+/g, '').split(',') : [];
    }
    Object.assign({}, updateData, updateData[name] = value);
    context.commit(MU_UPDATE_INPUT_WORK, updateData);
  },
};

export default updateInput;
