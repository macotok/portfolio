<template lang="pug">
  div.m-button-01
    a.m-button-01-link(:href="linkTo", :target="isTargetBlank")
      slot
</template>

<script>
export default {
  props: {
    linkTo: String,
    targetBlank: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isTargetBlank() {
      return this.targetBlank ? '_blank' : '';
    },
  },
};
</script>
