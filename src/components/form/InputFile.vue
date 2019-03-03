<style scoped lang="scss">
  @import "../../assets/sass/styles.scss";
  input {
    font-size: 110%;
    width: 100%;
    padding: 10px;
    border: 1px solid $gray-color-03;
    resize: none;
    box-sizing: border-box;
    &.fileInput {
      border: none;
      display: none;
    }
  }
  .file {
    color: $white-color;
    background-color: $sub-color;
    border-radius: $border-radius;
    padding: $borderPadding;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
  .fileThumnail {
    display: block;
    margin-top: 10px;
  }
</style>

<template lang="pug">
  div
    label.file {{labelName}}
      input.fileInput(type="file", @change="onFileChange")
    img.fileThumnail(
      v-if="privateState.image_path",
      :src="privateState.image_path",
      :width="thumnailSize"
    )
    img.fileThumnail(v-else-if="model", :src="model", :width="thumnailSize")
    p(v-if="privateState.errorMessage") {{privateState.errorMessage}}
</template>

<script>
export default {
  data() {
    return {
      privateState: {
        image_path: '',
        errorMessage: '',
      },
    };
  },
  props: {
    labelName: String,
    thumnailSize: String,
    name: String,
    model: String,
    eventName: String,
  },
  methods: {
    onFileChange(e) {
      this.createImage(e.target.files[0], e.target.files[0].name);
    },
    createImage(file, fileName) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.privateState.image_path = e.target.result;
        this.$emit(this.eventName, e.target.result, fileName);
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
