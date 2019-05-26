<template lang="pug">
  te-root(
    :workList="workList"
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
    ...mapState('works', {
      workList(state) {
        return state.works;
      },
    }),
    ...mapState('skill', {
      skillList(state) {
        return state.skill;
      },
    }),
  },
};
</script>
