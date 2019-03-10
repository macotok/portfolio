<template lang="pug">
  div
    title-block About this Portfolio
    about-detail
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import AboutDetail from '@/components/about/Detail';
import { WORKS_START_NUMBER } from '@/defines';

export default {
  created() {
    this.$store.dispatch('worksPaginationNUmber', {
      pagerNumber: WORKS_START_NUMBER,
    });
  },
  components: {
    TitleBlock,
    AboutDetail,
  },
};
</script>
