<template>
  <div>
    <title-block>
      About
    </title-block>
    <about></about>
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import About from '@/components/about/Detail';
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
