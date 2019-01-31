<template>
  <div>
    <title-block title="Works"></title-block>
    <work-list
      :works="sharedState.works"
      :start="privateState.worksStart"
      :count="privateState.worksCount"
    >
    </work-list>
    <more-button linkTo="works"></more-button>
    <title-block title="Skill"></title-block>
    <skill :skill="sharedState.skill" page="top"></skill>
    <more-button linkTo="skill"></more-button>
    <title-block title="Profile"></title-block>
    <Profile page="top"></Profile>
    <more-button linkTo="profile"></more-button>
    <title-block title="About This Portfolio"></title-block>
    <About></About>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import WorkList from '../components/WorkList';
import Skill from '../components/Skill';
import MoreButton from '../components/button/MoreButton';
import Profile from '../components/Profile';
import About from '../components/About';
import { WORKS_LIST_TOP_LENGTH, WORKS_START_NUMBER } from '../defines';

export default {
  data() {
    return {
      privateState: {
        worksCount: WORKS_LIST_TOP_LENGTH,
        worksStart: 0,
      },
    };
  },
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  created() {
    this.$store.state.worksPaginationNUmber = WORKS_START_NUMBER;
  },
  components: {
    TitleBlock,
    WorkList,
    MoreButton,
    Skill,
    Profile,
    About,
  },
};
</script>
