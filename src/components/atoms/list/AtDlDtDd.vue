<template lang="pug">
  dl
    dt {{ title }}
    dd(
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
  },
};
</script>
