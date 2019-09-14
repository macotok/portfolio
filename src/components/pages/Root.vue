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
import { AC_READ_WORK_LIST } from '@/store/work/actions/readList';
import { AC_READ_SKILL_LIST } from '@/store/skill/actions/readList';

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
    const displayList = {
      displayLength: WORK_LIST_TOP_LENGTH,
      targetState: null,
    };
    this.$store.dispatch(`work/${AC_READ_WORK_LIST}`, displayList);
    this.$store.dispatch(`skill/${AC_READ_SKILL_LIST}`);
  },
};
</script>
