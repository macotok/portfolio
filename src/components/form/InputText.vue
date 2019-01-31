<style scoped lang="scss">
  @import "../../assets/sass/styles.scss";
  input {
    font-size: 110%;
    width: 100%;
    padding: 10px;
    border: 1px solid $gray-color-03;
    resize: none;
    box-sizing: border-box;
  }
</style>

<template>
  <div>
    <input type="text" v-model=this.model value=this.model>
  </div>
</template>

<script>
export default {
  props: {
    model: String,
  },
};
</script>
