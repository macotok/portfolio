<template lang="pug">
  ul.moDrawerList
    li.moDrawerList-item(
      v-for="nav in navList"
      @click="clickItem"
      :data-route="nav.route"
    ) {{ nav.name }}
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clickItem(e) {
      this.$emit('click-item', e);
    },
  },
};
</script>
