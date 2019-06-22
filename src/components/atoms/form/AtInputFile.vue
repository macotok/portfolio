<template lang="pug">
  div.atInputFile
    label.atInputFile-label(
      :for="labelName"
    )
      slot 選択
      input.atInputFile-input(
        type="file"
        v-validate.continues="vValidate"
        :id="labelName"
        :name="name"
        :value="value"
        @change="inputFile"
      )
    ul
      li(v-for="error in errors.collect(name)") {{ error }}
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
    value: {
      type: String,
      default: '',
    },
    vValidate: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    inputFile(e) {
      this.createImage(e.target.files[0], e.target.files[0].name);
    },
    createImage(file, fileName) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.$emit('input-file', {
          path: e.target.result,
          name: fileName,
        });
      };
      reader.onerror = () => {
        reader.abort();
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
