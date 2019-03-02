<template>
  <div>
    <title-block>
      Profile
    </title-block>
    <profile></profile>
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import Profile from '@/components/profile/Detail';
import { WORKS_START_NUMBER } from '@/defines';

export default {
  created() {
    this.$store.state.worksPaginationNUmber = WORKS_START_NUMBER;
  },
  components: {
    TitleBlock,
    Profile,
  },
};
</script>
