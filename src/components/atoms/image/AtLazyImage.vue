<template lang="pug">
  div.atLazyImage(
    :style="styles.lazyWrapper"
  )
    v-lazy-image(
      :class="className"
      :style="styles.lazyImage"
      :src="src"
      :alt="alt"
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
    styles: {
      type: Object,
      default: null,
    },
  },
};
</script>
