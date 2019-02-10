<style scoped lang="scss">
  .m-button-03 {
    margin-top: 1rem;
  }
</style>

<template>
  <div class="m-button-03">
    <button type="button" class="m-button-03-link">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
