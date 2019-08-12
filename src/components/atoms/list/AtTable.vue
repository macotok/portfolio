<template lang="pug">
  table.atTable
    tr(
      v-for="(data) in dataList"
      :key="data.id"
    )
      th.atTable-header
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
      default: () => [],
    },
  },
};
</script>
