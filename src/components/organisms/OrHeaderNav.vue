<template lang="pug">
  nav
    mo-nav-list(
      :navList="navList"
    )
</template>

<script>
import MoNavList from '@/components/molecules/list/MoNavList';
import NAV_LIST from '@/defines/navList';

export default {
  components: {
    MoNavList,
  },
  computed: {
    navList: () => NAV_LIST,
  },
};
</script>
