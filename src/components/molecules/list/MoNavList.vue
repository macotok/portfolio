<template lang="pug">
  ul.moNavList
    li(
      v-for="nav in navList"
    )
      at-nav(
        :nav="nav"
      )
</template>

<script>
import AtNav from '@/components/atoms/text/AtNav';

export default {
  components: {
    AtNav,
  },
  props: {
    navList: {
      type: Array,
      required: true,
    },
  },
};
</script>
