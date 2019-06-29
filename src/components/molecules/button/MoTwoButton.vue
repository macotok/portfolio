<template lang="pug">
  div.moTwoButton(
    :style="styles"
  )
    at-event-button(
      :className="classNameLeft"
      :dataID="dataID"
      @click-button="clickButtonLeft"
    )
      slot(name="first")
    at-event-button(
      :className="classNameRight"
      :dataID="dataID"
      @click-button="clickButtonRight"
    )
      slot(name="second")
</template>

<script>
import AtEventButton from '@/components/atoms/button/AtEventButton';

export default {
  components: {
    AtEventButton,
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
