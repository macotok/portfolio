<template lang="pug">
  work-te-index(
    :workList="workList"
    :workLength="workLength"
    :workListStart="workListStart"
  )
</template>

<script>
import { mapState } from 'vuex';
import WorkTeIndex from '@/components/templates/Work/TeIndex';
import { WORK_LIST_LENGTH, LIST_START } from '@/defines';

export default {
  components: {
    WorkTeIndex,
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
