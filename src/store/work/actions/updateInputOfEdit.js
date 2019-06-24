// import { MU_UPDATE_INPUT_OF_EDIT } from '../mutations/updateInputOfEdit';

export const AC_UPDATE_INPUT_OF_EDIT = 'AC_UPDATE_INPUT_OF_EDIT';

const updateInputOfEdit = {
  [AC_UPDATE_INPUT_OF_EDIT](context, payload) {
    const updateData = context.state.update;
    // Object.assign({}, updateData, updateData[name] = value);
    // context.commit(MU_UPDATE_INPUT_OF_EDIT, updateData);
  },
};

export default updateInputOfEdit;
