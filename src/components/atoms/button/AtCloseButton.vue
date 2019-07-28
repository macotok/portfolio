<template lang="pug">
  div.atCloseButton(
    @click="clickButton"
  )
    span.atCloseButton-icon
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
