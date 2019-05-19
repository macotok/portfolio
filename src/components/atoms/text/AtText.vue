<template lang="pug">
  p(
    :style="styles"
  )
    slot
</template>

<script>
export default {
  props: {
    styles: {
      type: Object,
      default: null,
    },
  },
};
</script>
