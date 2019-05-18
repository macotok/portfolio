<template lang="pug">
  nav
    mo-nav-list(
      :navList="navList"
    )
</template>

<script>
import MoNavList from '@/components/molecules/MoNavList';
import NAV_LIST from '@/defines/navList';

export default {
  components: {
    MoNavList,
  },
  computed: {
    navList() {
      return NAV_LIST;
    },
  },
};
</script>
