<template lang="pug">
  textarea.atInputTextArea(
    :name="name"
    :rows="rows"
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
    rows: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    inputText(e) {
      this.$emit('input-text', e);
    },
  },
};
</script>
