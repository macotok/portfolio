<template lang="pug">
  te-index(
    :skillList="skillList"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

const TeIndex = () => import('@/components/templates/Skill/TeIndex');

export default {
  components: {
    TeIndex,
  },
  computed: {
    ...mapState('skill', {
      skillList: state => sortUpdatedAt(state.db),
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
};
</script>
