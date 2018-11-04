<style lang="css">
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5%;
  }
  .page-item {
    margin-right: .5%;
  }
  .page-item:last-child {
    margin-right: 0;
  }
  .page-item a {
    background-color: #F6F9FF;
    color: #4B4D52;
    display: inline-block;
    padding: 10px 16px;
    border: 1px solid #1C93FA;
  }
  .page-item.active a,
  .page-item a:hover {
    background-color: #1C93FA;
    color: #F6F9FF;
  }
</style>

<template>
  <paginate
    v-model="page"
    :page-count="paginationNumber"
    :page-range="worksLength"
    :margin-pages="0"
    :prev-text=null
    :next-text=null
    :click-handler="clickCallback"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
</template>

<script>
import Vue from 'vue';
import Paginate from 'vuejs-paginate';
import { WORKS_LIST_LENGTH } from '../defines';

Vue.component('paginate', Paginate);

export default {
  data() {
    return {
      worksLength: WORKS_LIST_LENGTH,
      page: this.$store.state.worksPaginationNUmber,
    };
  },
  methods: {
    clickCallback(pageNum) {
      this.page = pageNum;
      this.$store.state.worksPaginationNUmber = pageNum;
      window.scrollTo(0, 0);
    },
  },
  computed: {
    paginationNumber() {
      return this.$store.state.works.length / WORKS_LIST_LENGTH;
    },
  },
};
</script>
