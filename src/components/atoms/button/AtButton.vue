<template lang="pug">
  div.atButton(
    :style="styles.button"
  )
    template(v-if="routerLink")
      router-link.atButton-link(
        :to="{name: linkTo}"
        :style="styles.link"
      )
        slot
    template(v-else-if="hasEvent")
      div.atButton-link(
        :style="styles.link"
        :class="className"
        :data-dataID="dataID"
        @click="clickButton"
      )
        slot
    template(v-else)
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
    routerLink: {
      type: Boolean,
      default: false,
    },
    hasEvent: {
      type: Boolean,
      default: false,
    },
    linkTo: {
      type: String,
      default: null,
    },
    className: {
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
      default: () => ({
        button: null,
        link: null,
      }),
    },
    dataID: {
      type: Number,
      default: null,
    },
  },
  methods: {
    clickButton(e) {
      this.$emit('click-button', e.target);
    },
  },
};
</script>
