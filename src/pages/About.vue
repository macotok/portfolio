<template lang="pug">
  div
    title-block About this Portfolio
    about-detail
</template>

<script>
import { mapActions } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import AboutDetail from '@/components/about/Detail';
import { WORKS_START_NUMBER } from '@/defines';

export default {
  created() {
    this.worksPaginationNUmber({ pagerNumber: WORKS_START_NUMBER });
  },
  methods: {
    ...mapActions(['worksPaginationNUmber']),
  },
  components: {
    TitleBlock,
    AboutDetail,
  },
};
</script>
