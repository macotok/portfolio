<template>
  <div>
    <title-block title="Profile"></title-block>
    <profile page="detail"></profile>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import Profile from '../components/Profile';
import { WORKS_START_NUMBER } from '../defines';

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
