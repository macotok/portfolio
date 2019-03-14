<template lang="pug">
  div
    title-block Profile
    profile-detail
</template>

<script>
import { mapActions } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import ProfileDetail from '@/components/profile/Detail';
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
    ProfileDetail,
  },
};
</script>
