<template lang="pug">
  div.atButton
    template(v-if="routerLink")
      router-link.atButton-link(
        :to="{name: linkTo}"
      )
        slot
    template(v-else)
      a.atButton-link(
        :href="href"
        :target="target"
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
      required: null,
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
  },
};
</script>
