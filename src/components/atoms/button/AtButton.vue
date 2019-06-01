<template lang="pug">
  div.atButton
    template(v-if="routerLink")
      router-link.atButton-link(
        :to="{name: linkTo}"
        :style="styles"
      )
        slot
    template(v-else)
      a.atButton-link(
        :href="href"
        :target="target"
        :style="styles"
      )
        slot
</template>

<script>
export default {
  props: {
    routerLink: {
      type: Boolean,
      default: false,
    },
    linkTo: {
      type: String,
      default: null,
    },
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
      default: null,
    },
  },
};
</script>
