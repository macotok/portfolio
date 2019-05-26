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
