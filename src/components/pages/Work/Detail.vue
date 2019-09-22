<template lang="pug">
  te-detail(
    :data="data"
    :dataList="workDB"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import { AC_READ_WORK_ALL_LIST } from '@/store/work/actions/readAllList';

const TeDetail = () => import('@/components/templates/Work/TeDetail.vue');

export default {
  components: {
    TeDetail,
  },
  computed: {
    ...mapState('work', {
      data(state) {
        if (!state.db.length) this.$router.push({ name: 'root' });
        return state.db.find(d => d.id === parseInt(this.$route.params.id, 10));
      },
      workDB: state => state.db,
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
  created() {
    this.$store.dispatch(`work/${AC_READ_WORK_ALL_LIST}`);
  },
};
</script>
