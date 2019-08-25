<template lang="pug">
  te-root(
    :workList="workList"
    :skillList="skillList"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import { WORK_LIST_TOP_LENGTH } from '@/defines';
import { AC_WORK_TOP_LIST } from '@/store/work/actions/readTopList';
import { AC_SKILL_TOP_LIST } from '@/store/skill/actions/readTopList';

const TeRoot = () => import('@/components/templates/TeRoot');

export default {
  components: {
    TeRoot,
  },
  computed: {
    ...mapState('work', {
      workList: state => state.db,
    }),
    ...mapState('skill', {
      skillList: state => state.db,
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
  created() {
    this.$store.dispatch(`work/${AC_WORK_TOP_LIST}`, WORK_LIST_TOP_LENGTH);
    this.$store.dispatch(`skill/${AC_SKILL_TOP_LIST}`);
  },
};
</script>
