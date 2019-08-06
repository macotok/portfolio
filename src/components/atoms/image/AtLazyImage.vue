<template lang="pug">
  div.atLazyImage
    v-lazy-image(
      :class="className"
      :style="styles"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
    )
    .atLazyImage-loader
</template>

<script>
import VLazyImage from 'v-lazy-image';

export default {
  components: {
    VLazyImage,
  },
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
