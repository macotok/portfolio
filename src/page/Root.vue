<style scoped lang="scss">
</style>

<template>
  <div>
    <title-block title="Works"></title-block>
    <work-list
      :works="sharedState.works"
      :count="privateState.worksCount"
    >
    </work-list>
    <more-button linkTo="works"></more-button>
    <title-block title="Skill"></title-block>
    <skill-top></skill-top>
    <more-button linkTo="skill"></more-button>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
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
    TitleBlock,
    WorkList,
    MoreButton,
    SkillTop,
  },
};
</script>
