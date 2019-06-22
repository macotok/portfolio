<template lang="pug">
  a(
    :href="href"
    :target="target"
  )
    slot
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
  },
};
</script>
