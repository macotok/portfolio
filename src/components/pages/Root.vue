<template lang="pug">
  te-root(
    :workList="workList"
    :workLength="workLength"
    :workListStart="workListStart"
    :skillList="skillList"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeRoot from '@/components/templates/TeRoot';
import { WORK_LIST_TOP_LENGTH, LIST_START } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  components: {
    TeRoot,
  },
  computed: {
    ...mapState('work', {
      workList: state => sortUpdatedAt(state.db),
    }),
    ...mapState('skill', {
      skillList: state => sortUpdatedAt(state.db),
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
    workLength: () => WORK_LIST_TOP_LENGTH,
    workListStart: () => LIST_START,
  },
};
</script>
