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
        if (!Object.values(state.db).length) { return inputDataList; }
        return state.db[this.$route.params.id];
      },
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
};
</script>
