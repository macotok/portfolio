<template lang="pug">
  te-skill(
    :skillList="skill"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeSkill from '@/components/templates/TeSkill';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  components: {
    TeSkill,
  },
  computed: {
    ...mapState('skill', {
      skill: state => sortUpdatedAt(state.skill),
    }),
  },
};
</script>
