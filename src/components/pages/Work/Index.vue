<template lang="pug">
  work-te-index(
    :workList="workList"
    :workLength="workLength"
    :pagerNumber="pagerNumber"
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
      workList: state => state.db,
      pagerNumber: state => state.pagerNumber,
    }),
    workLength: () => WORK_LIST_LENGTH,
    workListStart: () => LIST_START,
  },
};
</script>
