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
        :value="value"
        @change="inputFile"
       )
    img.fileThumnail(
      v-if="privateState.image_path",
      :src="privateState.image_path",
    )
    img.fileThumnail
    p(v-if="privateState.errorMessage") {{privateState.errorMessage}}
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
  },
  data() {
    return {
      privateState: {
        image_path: '',
        errorMessage: '',
      },
    };
  },
  methods: {
    inputFile(e) {
      this.createImage(e.target.files[0], e.target.files[0].name);
    },
    createImage(file, fileName) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.privateState.image_path = e.target.result;
        this.$emit('input-file', {
          image_path: e.target.result,
          image_name: fileName,
        });
      };
      reader.onerror = () => {
        this.privateState.errorMessage = '読み込みに失敗しました';
        reader.abort();
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
