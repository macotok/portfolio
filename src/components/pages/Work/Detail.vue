<template lang="pug">
  te-detail(
    :data="data"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeDetail from '@/components/templates/Work/TeDetail.vue';

export default {
  components: {
    TeDetail,
  },
  computed: {
    ...mapState('work', {
      data(index) {
        return state.db.find(w => (
          w.id === parseInt(this.$route.params.id, 10)
        ));
      },
    }),
  },
};
</script>
