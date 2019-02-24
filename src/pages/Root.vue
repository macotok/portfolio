<template>
  <div>
    <title-block title="Works"></title-block>
    <work-list
      :works="worksData"
      :start="privateState.worksStart"
      :count="privateState.worksCount"
    >
    </work-list>
    <more-button linkTo="works"></more-button>
    <title-block title="Skills"></title-block>
    <skill-list
      :skill="skillData"
      page="top"
    >
    </skill-list>
    <more-button linkTo="skills"></more-button>
    <title-block title="Profile"></title-block>
    <Profile page="top"></Profile>
    <more-button linkTo="profile"></more-button>
    <title-block title="About this Portfolio"></title-block>
    <About></About>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import WorkList from '../components/work/List';
import SkillList from '../components/skill/List';
import MoreButton from '../components/button/More';
import Profile from '../components/Profile';
import About from '../components/About';
import { WORKS_LIST_TOP_LENGTH, WORKS_START_NUMBER } from '../defines';
import sortUpdatedAt from '../utils/sortUpdatedAt';

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
    worksData() {
      return sortUpdatedAt(this.$store.state.works);
    },
    skillData() {
      return sortUpdatedAt(this.$store.state.skill);
    },
  },
  created() {
    this.$store.state.worksPaginationNUmber = WORKS_START_NUMBER;
  },
  components: {
    TitleBlock,
    WorkList,
    MoreButton,
    SkillList,
    Profile,
    About,
  },
};
</script>
