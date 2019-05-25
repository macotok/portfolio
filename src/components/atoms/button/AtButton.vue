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

<style lang="scss">
  .atButton {
    display: flex;
    justify-content: flex-end;
    &-link {
      display: inline-block;
      text-decoration: none;
      background-color: $link-color;
      color: $gray-color-04;
      padding: 10px 25px;
      text-align: center;
      border-radius: 3px;
      font-size: .9rem;
      transition: .1s ease-in-out;
      border: 1px solid $link-color;
      &:hover {
        background-color: $gray-color-04;
        color: $link-color;
      }
    }
  }
</style>
