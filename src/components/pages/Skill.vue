<template lang="pug">
  te-skill(
    :skillList="skill"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeSkill from '@/components/templates/TeSkill';

export default {
  components: {
    TeSkill,
  },
  computed: {
    ...mapState({
      skill(state) {
        return state.skill;
      },
    }),
  },
};
</script>
