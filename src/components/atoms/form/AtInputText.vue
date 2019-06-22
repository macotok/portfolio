<template lang="pug">
  input(
    class="atInputText"
    type="text"
    :name="name"
    :value="value"
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
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    inputText(e) {
      this.$emit('input-text', e.target.value);
    },
  },
};
</script>
