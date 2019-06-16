<template lang="pug">
  skill-te-index(
    :skillList="skill"
  )
</template>

<script>
import { mapState } from 'vuex';
import SkillTeIndex from '@/components/templates/Skill/TeIndex';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  components: {
    SkillTeIndex,
  },
  computed: {
    ...mapState('skill', {
      skill: state => sortUpdatedAt(state.db),
    }),
  },
};
</script>
