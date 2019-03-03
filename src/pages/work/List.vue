<template lang="pug">
  div
    title-block Works
    work-list(
      :works="worksData",
      :start="listStart",
      :count="privateState.worksLength"
    )
    pagination
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import WorkList from '@/components/work/List';
import Pagination from '@/components/Pagination';
import { WORKS_LIST_LENGTH } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  data() {
    return {
      privateState: {
        worksLength: WORKS_LIST_LENGTH,
      },
    };
  },
  computed: {
    worksData() {
      return sortUpdatedAt(this.$store.state.works);
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
