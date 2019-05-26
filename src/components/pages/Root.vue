<template lang="pug">
  te-root(
    :skillList="skillList"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeRoot from '@/components/templates/TeRoot';

export default {
  components: {
    TeRoot,
  },
  computed: {
    ...mapState('skill', {
      skillList(state) {
        return state.skill;
      },
    }),
  },
};
</script>
