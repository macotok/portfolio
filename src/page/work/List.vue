<template>
  <div>
    <title-block title="Works"></title-block>
    <work-list
      :works="sharedState.works"
      :start="listStart"
      :count="worksLength"
    >
    </work-list>
    <pagination></pagination>
  </div>
</template>

<script>
import TitleBlock from '../../components/TitleBlock';
import WorkList from '../../components/work/List';
import Pagination from '../../components/Pagination';
import { WORKS_LIST_LENGTH } from '../../defines';

export default {
  data() {
    return {
      worksLength: WORKS_LIST_LENGTH,
    };
  },
  computed: {
    sharedState() {
      return this.$store.state;
    },
    listStart() {
      return WORKS_LIST_LENGTH * (this.$store.state.worksPaginationNUmber - 1);
    },
  },
  components: {
    WorkList,
    TitleBlock,
    Pagination,
  },
};
</script>
