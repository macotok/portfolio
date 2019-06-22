import { MU_UPDATE_INPUT } from '../mutations/updateInput';

export const AC_UPDATE_INPUT = 'AC_UPDATE_INPUT';

const updateInput = {
  [AC_UPDATE_INPUT](context, payload) {
    const { name } = payload;
    let { value } = payload;
    const updateData = context.state.update;
    if (name === 'tags') {
      value = value.trim() ? value.replace(/\s+/g, '').split(',') : [];
    }
    Object.assign({}, updateData, updateData[name] = value);
    context.commit(MU_UPDATE_INPUT, updateData);
  },
};

export default updateInput;
