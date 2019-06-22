<template lang="pug">
  img(
    :style="styles"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
  )
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: 'auto',
    },
    height: {
      type: [String, Number],
      default: 'auto',
    },
    styles: {
      type: Object,
      default: null,
    },
  },
};
</script>
