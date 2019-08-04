<template lang="pug">
  te-index(
    :workList="workList"
    :workLength="WORK_LIST_LENGTH"
    :pagerNumber="pagerNumber"
  )
</template>

<script>
import { mapState } from 'vuex';
import { WORK_LIST_LENGTH } from '@/defines';
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
    WORK_LIST_LENGTH: () => WORK_LIST_LENGTH,
  },
};
</script>
