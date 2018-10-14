<style scoped lang="scss">
</style>

<template>
  <div>
    <work-list
      :works="sharedState.works"
      :count="privateState.worksCount"
    >
    </work-list>
    <more-button
      linkTo="works"
    >
    </more-button>
    <skill-top></skill-top>
  </div>
</template>

<script>
import WorkList from '../components/WorkList';
import SkillTop from '../components/SkillTop';
import MoreButton from '../components/MoreButton';

export default {
  data() {
    return {
      privateState: {
        worksCount: 10,
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
    MoreButton,
    SkillTop,
  },
};
</script>
