<template lang="pug">
  div.moInputFilePreview
    at-input-file(
      :name="name"
      :vValidate="vValidate"
      @input-file="inputData"
    )
    at-image(
      :src="inputList.image.path || src"
      :styles="styles"
      width="150"
    )
</template>

<script>
import AtInputFile from '@/components/atoms/form/AtInputFile';
import AtImage from '@/components/atoms/image/AtImage';

export default {
  components: {
    AtImage,
    AtInputFile,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    nameSpace: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      default: '',
    },
    vValidate: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    inputList() {
      return this.$store.state[this.nameSpace].update;
    },
    styles() {
      return {
        marginLeft: '2rem',
      };
    },
  },
  methods: {
    inputData(data) {
      this.$emit('input-file', data);
    },
  },
};
</script>
