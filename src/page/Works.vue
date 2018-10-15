<template>
  <div>
    <title-block title="Works"></title-block>
    <work-list :works="sharedState.works"></work-list>
    <pagination></pagination>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import WorkList from '../components/WorkList';
import Pagination from '../components/Pagination';

export default {
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  components: {
    WorkList,
    TitleBlock,
    Pagination,
  },
};
</script>
