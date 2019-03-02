<template lang="pug">
  div.m-button-03
    button.m-button-03-link(@click="deleteId", type="button")
      slot
</template>

<script>
export default {
  props: {
    eventName: String,
  },
  methods: {
    deleteId() {
      this.$emit(this.eventName);
    },
  },
};
</script>
