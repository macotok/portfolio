<template lang="pug">
  te-detail(
    :data="data"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';
import { AC_READ_WORK_DETAIL } from '@/store/work/actions/readDetail';

const TeDetail = () => import('@/components/templates/Work/TeDetail.vue');

export default {
  components: {
    TeDetail,
  },
  computed: {
    ...mapState('work', {
      data(state) {
        if (!Object.values(state.db).length) this.$router.push({ name: 'root' });
        return state.db;
      },
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
  created() {
    this.$store.dispatch(`work/${AC_READ_WORK_DETAIL}`, this.$route.params.id);
  },
};
</script>
