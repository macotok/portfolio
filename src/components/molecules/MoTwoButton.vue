<template lang="pug">
  div.moTwoButton(
    :style="styles"
  )
    at-button(
      :hasEvent="hasEvent"
      :className="classNameLeft"
      :dataID="dataID"
      @click-button="clickButtonLeft"
    )
      slot(name="first")
    at-button(
      :hasEvent="hasEvent"
      :className="classNameRight"
      :dataID="dataID"
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
    dataID: {
      type: Number,
      default: null,
    },
  },
  methods: {
    clickButtonLeft(eventTarget) {
      this.$emit('click-button-left', eventTarget);
    },
    clickButtonRight(eventTarget) {
      this.$emit('click-button-right', eventTarget);
    },
  },
};
</script>
