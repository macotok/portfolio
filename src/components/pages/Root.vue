<template lang="pug">
  te-root(
    :workList="workList"
    :workLength="WORK_LIST_TOP_LENGTH"
    :skillList="skillList"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import { WORK_LIST_TOP_LENGTH } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

const TeRoot = () => import('@/components/templates/TeRoot');

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
    WORK_LIST_TOP_LENGTH: () => WORK_LIST_TOP_LENGTH,
  },
};
</script>
