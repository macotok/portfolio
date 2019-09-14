<template lang="pug">
  te-index(
    :workList="workList"
    :workLength="WORK_LIST_LENGTH"
    :pagerNumber="pagerNumber"
  )
</template>

<script>
import { mapState } from 'vuex';
import { AC_READ_WORK_LIST } from '@/store/work/actions/readList';
import { WORK_LIST_LENGTH } from '@/defines';

const teIndex = () => import('@/components/templates/Work/TeIndex');

export default {
  components: {
    teIndex,
  },
  computed: {
    ...mapState('work', {
      workList: state => state.db,
      pagerNumber: state => state.pagerNumber,
    }),
    WORK_LIST_LENGTH: () => WORK_LIST_LENGTH,
  },
  mounted() {
    this.$store.subscribeAction((action, state) => {
      if (action.type === 'work/AC_PAGER_NUMBER') {
        const displayList = {
          displayLength: WORK_LIST_LENGTH,
          targetState: state.work,
        };
        this.$store.dispatch(`work/${AC_READ_WORK_LIST}`, displayList);
      }
    });
  },
  created() {
    const displayList = {
      displayLength: WORK_LIST_LENGTH,
      targetState: null,
    };
    this.$store.dispatch(`work/${AC_READ_WORK_LIST}`, displayList);
  },
};
</script>
