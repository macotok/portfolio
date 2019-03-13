<template lang="pug">
  div
    work-detail(:data="workData")
</template>

<script>
import { mapState } from 'vuex';
import WorkDetail from '@/components/work/Detail';

export default {
  computed: {
    ...mapState({
      workData(state) {
        return state.works.find(w => (
          w.id === parseInt(this.$route.params.id, 10)
        ));
      },
    }),
  },
  components: {
    WorkDetail,
  },
};
</script>
