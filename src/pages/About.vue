<template>
  <div>
    <title-block>
      About
    </title-block>
    <about page="detail"></about>
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import About from '@/components/About';
import { WORKS_START_NUMBER } from '@/defines';

export default {
  created() {
    this.$store.state.worksPaginationNUmber = WORKS_START_NUMBER;
  },
  components: {
    TitleBlock,
    About,
  },
};
</script>
