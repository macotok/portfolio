<template lang="pug">
  div.m-button-01
    button.m-button-01-link(@click="save", type="submit")
      slot
</template>

<script>
export default {
  props: {
    eventName: String,
  },
  methods: {
    save() {
      this.$emit(this.eventName);
    },
  },
};
</script>
