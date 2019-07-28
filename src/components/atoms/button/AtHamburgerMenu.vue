<template lang="pug">
  div.atHamburgerMenu(
    @click="clickButton"
  )
    div.atHamburgerMenu-item
    div.atHamburgerMenu-item
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
