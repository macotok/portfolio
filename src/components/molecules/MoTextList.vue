<template lang="pug">
  div.moTextList
    at-ul-li(
      :list="list"
      :styles="styles"
    )
</template>

<script>
import AtUlLi from '@/components/atoms/list/AtUlLi';

export default {
  components: {
    AtUlLi,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    styles: {
      type: Object,
      default: null,
    },
  },
};
</script>
