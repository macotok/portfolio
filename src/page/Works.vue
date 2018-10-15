<template>
  <div>
    <title-block title="Works"></title-block>
    <work-list :works="sharedState.works"></work-list>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import WorkList from '../components/WorkList';

export default {
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  components: {
    WorkList,
    TitleBlock,
  },
};
</script>
