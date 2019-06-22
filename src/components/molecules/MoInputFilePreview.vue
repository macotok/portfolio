<template lang="pug">
  div
    at-input-file(
      :name="name"
      @input-file="inputData"
    )
    at-image(
      :src="src"
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
    src: {
      type: String,
      default: '',
    },
  },
  methods: {
    inputData(data) {
      this.$emit('input-file', data);
    },
  },
};
</script>
