<template lang="pug">
  textarea(
    class="atTextarea"
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
