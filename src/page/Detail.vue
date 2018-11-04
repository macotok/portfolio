<template>
  <div>
    <work-detail
      :data="workData"
    >
    </work-detail>
  </div>
</template>

<script>
import WorkDetail from '../components/WorkDetail';

export default {
  computed: {
    workData() {
      const dataId = parseInt(this.$route.params.id, 10);
      const data = this.$store.state.works.find(w => (
        w.id === dataId
      ));
      return data;
    },
  },
  components: {
    WorkDetail,
  },
};
</script>
