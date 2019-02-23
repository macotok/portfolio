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

<template>
  <div>
    <label class="file">
      {{labelName}}
      <input class="fileInput" type="file" @change="onFileChange">
    </label>
    <img v-if="image_path" :src="image_path" :width="thumnailSize" class="fileThumnail">
    <img v-else-if="model" :src="model" :width="thumnailSize" class="fileThumnail">
    <p v-if="errorMessage">
      {{errorMessage}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_path: '',
      errorMessage: '',
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
        this.image_path = e.target.result;
        this.$emit(this.eventName, e.target.result, fileName);
      };
      reader.onerror = () => {
        this.errorMessage = '読み込みに失敗しました';
        reader.abort();
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
