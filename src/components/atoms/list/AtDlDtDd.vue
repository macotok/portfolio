<template lang="pug">
  dl(:style="styles.dl")
    dt(
      :style="styles.dt"
    ) {{ title }}
    dd(
      :style="styles.dd"
      v-for="text in list"
    ) {{ text }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    list: {
      type: Array,
      required: true,
    },
    styles: {
      type: Object,
      default: () => ({
        dl: null,
        dt: null,
        dd: null,
      }),
    },
  },
};
</script>
