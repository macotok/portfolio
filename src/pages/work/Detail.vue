<template lang="pug">
  div
    work-detail(:data="workData")
</template>

<script>
import WorkDetail from '@/components/work/Detail';

export default {
  computed: {
    workData() {
      const data = this.$store.state.works.find(w => (
        w.id === parseInt(this.$route.params.id, 10)
      ));
      return data;
    },
  },
  components: {
    WorkDetail,
  },
};
</script>
