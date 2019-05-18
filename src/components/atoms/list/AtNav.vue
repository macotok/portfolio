<template lang="pug">
  router-link.atNav(
    :to="{name: nav.route}", exact
  ) {{ nav.name }}
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .atNav {
    text-decoration: none;
    display: block;
    padding: 15px 30px;
    background-color: $gray-color-01;
    &:hover {
      color: $white-color;
      background-color: $key-color;
    }
    &.router-link-active {
      text-decoration: none;
      pointer-events: none;
      color: $white-color;
      background-color: $key-color;
    }
  }
</style>
