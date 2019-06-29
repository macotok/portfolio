import { MU_UPDATE_INPUT } from '@/store/skill/mutations/updateInput';

export const AC_UPDATE_INPUT = 'AC_UPDATE_INPUT';

const updateInput = {
  [AC_UPDATE_INPUT](context, payload) {
    const { name, value } = payload;
    const updateData = context.state.update;
    Object.assign({}, updateData, updateData[name] = value);
    context.commit(MU_UPDATE_INPUT, updateData);
  },
};

export default updateInput;
