<style scoped lang="scss">
  @import "../../assets/sass/styles.scss";
  textarea {
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
    textarea(
      :name="name",
      :value="model",
      :rows="rows",
      :placeholder="placeholder",
      @input="updateValue"
    )
</template>

<script>
export default {
  props: {
    name: String,
    model: String,
    placeholder: String,
    eventName: String,
    rows: String,
  },
  methods: {
    updateValue(e) {
      this.$emit(this.eventName, e.target.value);
    },
  },
};
</script>
