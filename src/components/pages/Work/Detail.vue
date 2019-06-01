<template lang="pug">
  work-te-detail(
    :data="data"
  )
</template>

<script>
import { mapState } from 'vuex';
import WorkTeDetail from '@/components/templates/Work/TeDetail.vue';

export default {
  components: {
    WorkTeDetail,
  },
  computed: {
    ...mapState('work', {
      data(state) {
        return state.work.find(w => (
          w.id === parseInt(this.$route.params.id, 10)
        ));
      },
    }),
  },
};
</script>
