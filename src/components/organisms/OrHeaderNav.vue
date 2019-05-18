<template lang="pug">
  nav
    mo-nav-list(
      :navList="navList"
    )
</template>

<script>
import MoNavList from '@/components/molecules/MoNavList';

export default {
  components: {
    MoNavList,
  },
  data() {
    return {
      navList: [
        {
          name: 'Top',
          route: 'root',
        },
        {
          name: 'Work',
          route: 'root',
        },
        {
          name: 'Skill',
          route: 'root',
        },
        {
          name: 'Profile',
          route: 'root',
        },
        {
          name: 'About',
          route: 'root',
        },
      ],
    };
  },
};
</script>
