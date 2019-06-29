<template lang="pug">
  div.atButton(
    :style="styles.button"
  )
    a.atButton-link(
      :href="href"
      :target="target"
      :style="styles.link"
    )
      slot
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: '_blank',
    },
    styles: {
      type: Object,
      default: () => ({
        button: null,
        link: null,
      }),
    },
  },
};
</script>
