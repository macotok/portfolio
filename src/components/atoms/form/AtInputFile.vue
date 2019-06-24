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
import AtText from '@/components/atoms/text/AtText';

export default {
  components: {
    AtText,
  },
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
