<template lang="pug">
  te-work(
    :workList="workList"
    :workLength="workLength"
    :workListStart="workListStart"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeWork from '@/components/templates/TeWork';
import { WORK_LIST_LENGTH, LIST_START } from '@/defines';

export default {
  components: {
    TeWork,
  },
  computed: {
    ...mapState('work', {
      workList(state) {
        return state.work;
      },
    }),
    workLength() {
      return WORK_LIST_LENGTH;
    },
    workListStart() {
      return LIST_START;
    },
  },
};
</script>
