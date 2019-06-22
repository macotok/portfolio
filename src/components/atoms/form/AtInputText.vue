<template lang="pug">
  div
    input(
      class="atInputText"
      type="text"
      v-validate.continues="vValidate"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      @input="inputText"
    )
    ul
      li(v-for="error in errors.collect(name)") {{ error }}
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
