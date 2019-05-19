<template lang="pug">
  a(
    :href="href"
    :target="target"
  )
    img(
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
    )
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 'auto',
    },
    height: {
      type: [String, Number],
      default: 'auto',
    },
  },
};
</script>
