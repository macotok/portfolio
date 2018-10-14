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
    <skill :skill="sharedState.skill" page="top"></skill>
    <more-button linkTo="skill"></more-button>
    <title-block title="About"></title-block>
    <About page="top"></About>
    <more-button linkTo="about"></more-button>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import WorkList from '../components/WorkList';
import Skill from '../components/Skill';
import MoreButton from '../components/MoreButton';
import About from '../components/About';

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
    Skill,
    About,
  },
};
</script>
