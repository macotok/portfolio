<template lang="pug">
  te-index(
    :workList="workList"
    :workLength="workLength"
    :pagerNumber="pagerNumber"
  )
</template>

<script>
import { mapState } from 'vuex';
import teIndex from '@/components/templates/Work/TeIndex';
import { WORK_LIST_LENGTH, LIST_START } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  components: {
    teIndex,
  },
  computed: {
    ...mapState('work', {
      workList: state => sortUpdatedAt(state.db),
      pagerNumber: state => state.pagerNumber,
    }),
    workLength: () => WORK_LIST_LENGTH,
    workListStart: () => LIST_START,
  },
};
</script>
