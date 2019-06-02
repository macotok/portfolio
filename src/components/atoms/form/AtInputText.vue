<template lang="pug">
  input(
    class="atInputText"
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
