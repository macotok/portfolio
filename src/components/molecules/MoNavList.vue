<template lang="pug">
  ul.moNavList
    at-nav Top
</template>

<script>
import AtNav from '@/components/atoms/list/AtNav';

export default {
  components: {
    AtNav,
  },
};
</script>

<style lang="scss">
  .moNavList {
    display: flex;
    justify-content: center;
    background-color: $gray-color-01;
  }
</style>
