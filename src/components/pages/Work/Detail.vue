<template lang="pug">
  te-detail(
    :data="data"
    :isLoginAdmin="isLoginAdmin"
  )
</template>

<script>
import { mapState } from 'vuex';

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
    }),
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
  },
};
</script>
