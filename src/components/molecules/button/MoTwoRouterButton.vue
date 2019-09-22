<template lang="pug">
  div.moTwoRouterButton(
    :style="styles"
  )
    template(v-if="linkToLeft && linkToRight")
      at-router-button(
        :linkToDirectPage="linkToLeft"
      )
        slot(name="left")
      at-router-button(
        :linkToDirectPage="linkToRight"
      )
        slot(name="right")
    template(v-else-if="!linkToLeft && linkToRight")
      div
      at-router-button(
        :linkToDirectPage="linkToRight"
      )
        slot(name="right")
    template(v-else)
      at-router-button(
        :linkToDirectPage="linkToLeft"
      )
        slot(name="left")
</template>

<script>
import AtRouterButton from '@/components/atoms/button/AtRouterButton';

export default {
  components: {
    AtRouterButton,
  },
  props: {
    linkToLeft: {
      type: String,
      default: null,
    },
    linkToRight: {
      type: String,
      default: null,
    },
    styles: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
