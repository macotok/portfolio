<template lang="pug">
  input(
    class="atTextInput"
    type="text"
    :name="name"
    :placeholder="placeholder"
    @input="inputText"
  )
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    inputText(e) {
      this.$emit('input-text', e);
    },
  },
};
</script>

<style lang="scss">
  .atTextInput {
    font-size: 1rem;
    width: 100%;
    padding: 10px;
    border: 1px solid $gray-color-03;
    resize: none;
    box-sizing: border-box;
  }
</style>
