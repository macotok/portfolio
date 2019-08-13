<template lang="pug">
  te-detail(
    :data="data"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import inputDataList from '@/store/work/state/inputDataList';

const TeDetail = () => import('@/components/templates/Work/TeDetail.vue');

export default {
  components: {
    TeDetail,
  },
  computed: {
    ...mapState('work', {
      data(state) {
        if (!state.db.length) { return inputDataList; }
        return state.db.find(w => (
          w.id === parseInt(this.$route.params.id, 10)
        ));
      },
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
};
</script>
