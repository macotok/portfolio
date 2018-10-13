<style scoped lang="scss">
</style>

<template>
  <div>
    <work-list
      :works="sharedState.works"
      :count="privateState.count"
    >
    </work-list>
    <router-link :to="{name: 'works'}">もっと見る</router-link>
  </div>
</template>

<script>
import WorkList from '../components/WorkList';

export default {
  data() {
    return {
      privateState: {
        count: 20,
      },
    };
  },
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  components: {
    WorkList,
  },
};
</script>
