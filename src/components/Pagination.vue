<style lang="css">
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5%;
  }
  .pagination .pages-item {
    margin-right: 1%;
  }
  .pagination li:nth-last-child(2) {
    margin-right: 0;
  }
  .pagination .pages-item a {
    background-color: #F6F9FF;
    color: #4B4D52;
    display: inline-block;
    padding: 10px 16px;
    border: 1px solid #1C93FA;
  }
  .pagination .pages-item.active a,
  .pagination .pages-item a:hover {
    background-color: #1C93FA;
    color: #F6F9FF;
  }
  .pagination .displayNone {
    display: none;
  }
</style>

<template lang="pug">
  paginate(
    v-model="page",
    :page-count="paginationNumber",
    :page-range="worksLength",
    :margin-pages="0",
    :prev-text=null,
    :prev-class="'displayNone'",
    :next-text=null,
    :next-class="'displayNone'",
    :click-handler="clickCallback",
    :container-class="'pagination'",
    :page-class="'pages-item'"
  )
</template>

<script>
import Vue from 'vue';
import Paginate from 'vuejs-paginate';
import { WORKS_LIST_LENGTH } from '@/defines';

Vue.component('paginate', Paginate);

export default {
  methods: {
    clickCallback(pageNum) {
      this.$store.state.worksPaginationNUmber = pageNum;
      window.scrollTo(0, 0);
    },
  },
  computed: {
    paginationNumber() {
      return this.$store.state.works.length / WORKS_LIST_LENGTH;
    },
    worksLength() {
      return WORKS_LIST_LENGTH;
    },
    page() {
      return this.$store.state.worksPaginationNUmber;
    },
  },
};
</script>
