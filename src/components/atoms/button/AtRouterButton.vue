<template lang="pug">
  div.atButton(
    :style="styles.button"
  )
    router-link.atButton-link(
      :to="{name: linkTo}"
      :style="styles.link"
    )
      slot
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: null,
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
