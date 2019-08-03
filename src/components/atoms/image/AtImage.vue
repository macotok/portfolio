<template lang="pug">
  img(
    :class="className"
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
    className: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default: '',
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
