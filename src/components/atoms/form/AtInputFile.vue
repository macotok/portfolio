<template lang="pug">
  div.atInputFile
    label.atInputFile-label(
      :for="labelName"
    )
      slot 選択
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
