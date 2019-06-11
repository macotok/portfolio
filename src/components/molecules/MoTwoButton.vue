<template lang="pug">
  div.moTwoButton(
    :style="styles"
  )
    at-button(
      :hasEvent="hasEvent"
      :className="classNameLeft"
      @click-button="clickButtonLeft"
    )
      slot(name="first")
    at-button(
      :hasEvent="hasEvent"
      :className="classNameRight"
      @click-button="clickButtonRight"
    )
      slot(name="second")
</template>

<script>
import AtButton from '@/components/atoms/button/AtButton';

export default {
  components: {
    AtButton,
  },
  props: {
    hasEvent: {
      type: Boolean,
      default: true,
    },
    classNameLeft: {
      type: String,
      default: null,
    },
    classNameRight: {
      type: String,
      default: null,
    },
    styles: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    clickButtonLeft() {
      this.$emit('click-button-left');
    },
    clickButtonRight() {
      this.$emit('click-button-right');
    },
  },
};
</script>
