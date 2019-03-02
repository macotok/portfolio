<template lang="pug">
  div
    title-block Profile
    profile-detail
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import ProfileDetail from '@/components/profile/Detail';
import { WORKS_START_NUMBER } from '@/defines';

export default {
  created() {
    this.$store.state.worksPaginationNUmber = WORKS_START_NUMBER;
  },
  components: {
    TitleBlock,
    ProfileDetail,
  },
};
</script>
