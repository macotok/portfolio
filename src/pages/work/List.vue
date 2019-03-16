<template lang="pug">
  div
    title-block Work
    work-list(
      :works="worksData",
      :start="listStart",
      :count="worksLength"
    )
    pagination
    router-view
</template>

<script>
import { mapState } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import WorkList from '@/components/work/List';
import Pagination from '@/components/Pagination';
import { WORKS_LIST_LENGTH } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  computed: {
    ...mapState({
      worksData(state) {
        return sortUpdatedAt(state.works);
      },
      listStart(state) {
        return WORKS_LIST_LENGTH * (state.worksPaginationNUmber - 1);
      },
    }),
    worksLength() {
      return WORKS_LIST_LENGTH;
    },
  },
  components: {
    WorkList,
    TitleBlock,
    Pagination,
  },
};
</script>
