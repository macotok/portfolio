<template lang="pug">
  at-pagination(
    :page-count="pageCount",
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
import { mapState } from 'vuex';
import Paginate from 'vuejs-paginate';

Vue.component('at-pagination', Paginate);

export default {
  props: {
    actionType: {
      type: String,
      required: true,
    },
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
      pageCount(state) {
        return state[this.pageType][this.targetKey].length / this.length;
      },
    }),
  },
  methods: {
    clickCallback(currentPagerNumber) {
      this.$store.dispatch(`${this.pageType}/${this.actionType}`, {
        currentPagerNumber,
      });
      window.scrollTo(0, 0);
    },
  },
};
</script>
