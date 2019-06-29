import { MU_UPDATE_INPUT_OF_EDIT } from '@/store/skill/mutations/updateInputOfEdit';

export const AC_UPDATE_INPUT_OF_EDIT = 'AC_UPDATE_INPUT_OF_EDIT';

const updateInputOfEdit = {
  [AC_UPDATE_INPUT_OF_EDIT](context, payload) {
    const updateData = context.state.update;
    const updateDataOfEdit = Object.assign({}, updateData, payload);
    context.commit(MU_UPDATE_INPUT_OF_EDIT, updateDataOfEdit);
  },
};

export default updateInputOfEdit;
