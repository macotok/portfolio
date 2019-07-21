<template lang="pug">
  te-index(
    :skillList="skillList"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import teIndex from '@/components/templates/Skill/TeIndex';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  components: {
    teIndex,
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
