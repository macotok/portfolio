<template lang="pug">
  paginate(
    :page-count="paginationNumber",
    :page-range="workLength",
    :margin-pages="0",
    :prev-text=null,
    :prev-class="'displayNone'",
    :next-text=null,
    :next-class="'displayNone'",
    :click-handler="clickCallback",
    :container-class="'atPagination'",
    :page-class="'atPagination-item'"
  )
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import Paginate from 'vuejs-paginate';
import { WORK_LIST_LENGTH } from '@/defines';

Vue.component('paginate', Paginate);

export default {
  computed: {
    ...mapState({
      paginationNumber(state) {
        return state.works.length / WORK_LIST_LENGTH;
      },
    }),
    workLength() {
      return WORK_LIST_LENGTH;
    },
  },
  methods: {
    ...mapActions(['worksPaginationNUmber']),
    clickCallback(pageNum) {
      this.worksPaginationNUmber({ pagerNumber: pageNum });
      window.scrollTo(0, 0);
    },
  },
};
</script>
