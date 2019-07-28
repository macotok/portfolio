<template lang="pug">
  te-index(
    :workList="workList"
    :workLength="workLength"
    :pagerNumber="pagerNumber"
  )
</template>

<script>
import { mapState } from 'vuex';
import { WORK_LIST_LENGTH, LIST_START } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

const teIndex = () => import('@/components/templates/Work/TeIndex');

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
