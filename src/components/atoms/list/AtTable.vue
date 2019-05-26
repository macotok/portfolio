<template lang="pug">
  table.atTable
    tr(v-for="(data) in dataList")
      th.atTable-hader
        slot(
          :data="data"
          name="header"
        )
      td.atTable-data
        slot(
          :data="data"
          name="data"
        )
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .atTable {
    border-left: 1px solid $gray-color-04;
    border-top: 1px solid $gray-color-04;
    &-header {
      border-bottom: 1px solid $gray-color-04;
      vertical-align: middle;
      text-align: center;
      padding: 10px;
    }
    &-data {
      border-right: 1px solid $gray-color-04;
      border-bottom: 1px solid $gray-color-04;
      vertical-align: middle;
      text-align: left;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
