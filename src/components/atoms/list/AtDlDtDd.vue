<template lang="pug">
  dl(:style="styles.dl")
    template(v-for="(title, index) in titleList")
      dt(
        v-if="index === 0"
        :style="styles.dtFirstChild"
      ) {{ title }}
      dt(
        v-else
        :style="styles.dt"
      ) {{ title }}
      dd(
        v-for="text in list[index]"
        :style="styles.dd"
      ) {{ text }}
</template>

<script>
export default {
  props: {
    titleList: {
      type: Array,
      required: true,
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
        dtFirstChild: null,
        dd: null,
      }),
    },
  },
};
</script>
