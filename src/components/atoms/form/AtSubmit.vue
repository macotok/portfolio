<template lang="pug">
  div.atSubmit
    button.atSubmit-button(
      type="button"
      @click="clickButton"
    )
      slot
</template>

<script>
export default {
  methods: {
    clickButton() {
      this.$emit('click-button');
    },
  },
};
</script>
