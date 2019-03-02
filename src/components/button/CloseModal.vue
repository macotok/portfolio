<template lang="pug">
  div.m-button-04
    button.m-button-04-link(@click="close", type="button")
      slot
</template>

<script>
export default {
  props: {
    eventName: String,
  },
  methods: {
    close() {
      this.$emit(this.eventName);
    },
  },
};
</script>
