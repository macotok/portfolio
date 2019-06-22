<template lang="pug">
  div
    textarea.atInputTextArea(
      v-validate="vValidate"
      :name="name"
      :value="value"
      :rows="rows"
      :placeholder="placeholder"
      @input="inputText"
    )
    span {{ errors.first(name) }}
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
    rows: {
      type: Number,
      default: 10,
    },
    vValidate: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    inputText(e) {
      this.$emit('input-text', e.target.value);
    },
  },
};
</script>
