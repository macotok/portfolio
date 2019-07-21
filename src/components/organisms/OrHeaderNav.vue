<template lang="pug">
  nav
    mo-nav-list(
      :navList="navList"
    )
</template>

<script>
import { mapState } from 'vuex';
import MoNavList from '@/components/molecules/list/MoNavList';
import NAV_LIST from '@/defines/navList';

export default {
  components: {
    MoNavList,
  },
  computed: {
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
    navList() {
      return this.isLoginAdmin ? NAV_LIST : NAV_LIST.filter(nav => (nav.name !== 'Admin'));
    },
  },
};
</script>
