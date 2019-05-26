<template lang="pug">
  te-root(
    :workList="workList"
    :worksLength="worksLength"
    :worksListStart="worksListStart"
    :skillList="skillList"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeRoot from '@/components/templates/TeRoot';
import { WORKS_LIST_TOP_LENGTH, LIST_START } from '@/defines';

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
    worksLength() {
      return WORKS_LIST_TOP_LENGTH;
    },
    worksListStart() {
      return LIST_START;
    },
  },
};
</script>
