<template lang="pug">
  div.atInputFile
    label.atInputFile-label(
      :for="labelName"
    ) {{ text }}
     input.atInputFile-input(
      type="file"
      :id="labelName"
      :name="name"
      @change="inputFile"
     )
</template>

<script>
export default {
  props: {
    labelName: {
      type: String,
      default: 'file',
    },
    text: {
      type: String,
      default: '選択',
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    inputFile(e) {
      this.$emit('input-file', e);
    },
  },
};
</script>
