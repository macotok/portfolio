<template lang="pug">
  div.m-button-04
    router-link(:to="linkTo")
      button.m-button-04-link(type="button")
        slot
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
