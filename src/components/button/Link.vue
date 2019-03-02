<template lang="pug">
  div.m-button-01
    a.m-button-01-link(:href="linkTo")
      slot
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
