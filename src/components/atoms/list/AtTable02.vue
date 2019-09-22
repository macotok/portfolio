<template lang="pug">
  table.atTable02
    thead
      tr
        th 機能
        th 担当
    tbody
      tr(v-for="d in data[keyName]")
        td {{ d.name }}
        td {{ d.role }}
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    keyName: {
      type: String,
      default: '',
    },
  },
};
</script>
