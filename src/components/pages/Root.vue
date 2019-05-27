<template lang="pug">
  te-root(
    :workList="workList"
    :workLength="workLength"
    :workListStart="workListStart"
    :skillList="skillList"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeRoot from '@/components/templates/TeRoot';
import { WORK_LIST_TOP_LENGTH, LIST_START } from '@/defines';

export default {
  components: {
    TeRoot,
  },
  computed: {
    ...mapState('work', {
      workList(state) {
        return state.work;
      },
    }),
    ...mapState('skill', {
      skillList(state) {
        return state.skill;
      },
    }),
    workLength() {
      return WORK_LIST_TOP_LENGTH;
    },
    workListStart() {
      return LIST_START;
    },
  },
};
</script>
