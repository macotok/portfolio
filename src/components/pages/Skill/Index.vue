<template lang="pug">
  te-index(
    :skillList="skillList"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import { AC_READ_SKILL_LIST } from '@/store/skill/actions/readList';

const TeIndex = () => import('@/components/templates/Skill/TeIndex');

export default {
  components: {
    TeIndex,
  },
  computed: {
    ...mapState('skill', {
      skillList: state => state.db,
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
  created() {
    this.$store.dispatch(`skill/${AC_READ_SKILL_LIST}`);
  },
};
</script>
