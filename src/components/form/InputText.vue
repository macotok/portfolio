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

<template lang="pug">
  div
    input(
      type="text",
      :name="name",
      :value="model",
      :placeholder="placeholder",
      @input="updateValue"
    )
</template>

<script>
export default {
  props: {
    name: String,
    model: [String, Array],
    placeholder: String,
    eventName: String,
  },
  methods: {
    updateValue(e) {
      this.$emit(this.eventName, e.target.value);
    },
  },
};
</script>
