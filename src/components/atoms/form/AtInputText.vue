<template lang="pug">
  div
    input(
      class="atInputText"
      type="text"
      v-validate="'required'"
      :name="name"
      :value="value"
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
  },
  methods: {
    inputText(e) {
      this.$emit('input-text', e.target.value);
    },
  },
};
</script>
