<template lang="pug">
  at-pagination(
    :page-count="paginationNumber",
    :page-range="length",
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
import { AC_PAGINATION_NUMBER } from '@/store/work/actions/paginationNumber';

Vue.component('at-pagination', Paginate);

export default {
  props: {
    length: {
      type: Number,
      required: true,
    },
    pageType: {
      type: String,
      required: true,
    },
    targetKey: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      paginationNumber(state) {
        return state[this.pageType][this.targetKey].length / this.length;
      },
    }),
  },
  methods: {
    ...mapActions('work', [AC_PAGINATION_NUMBER]),
    clickCallback(pageNum) {
      this[AC_PAGINATION_NUMBER]({ pagerNumber: pageNum });
      window.scrollTo(0, 0);
    },
  },
};
</script>
