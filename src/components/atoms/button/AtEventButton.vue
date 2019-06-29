<template lang="pug">
  div.atButton(
    :style="styles.button"
  )
    div.atButton-link(
      :style="styles.link"
      :class="className"
      :data-dataID="dataID"
      @click="clickButton"
    )
      slot
</template>

<script>
export default {
  props: {
    className: {
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
