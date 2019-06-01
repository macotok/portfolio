<template lang="pug">
  ul.atUlLi(
    :style="styles.ul"
  )
    template(v-for="text in list")
      li.atUlLi-item(
        :style="styles.li"
      ) {{ text }}
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    styles: {
      type: Object,
      default: () => ({
        ul: null,
        li: null,
      }),
    },
  },
};
</script>
