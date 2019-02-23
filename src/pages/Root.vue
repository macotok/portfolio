<template>
  <div>
    <p><img :src="url" width="100"></p>
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
    <title-block title="About this portfolio"></title-block>
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
import { storage } from '../server/firebase';

export default {
  data() {
    return {
      privateState: {
        worksCount: WORKS_LIST_TOP_LENGTH,
        worksStart: 0,
      },
      url: '',
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
    const storageRef = storage.ref();
    const starsRef = storageRef.child('image_paso-jewelry_top1.jpg');
    starsRef.getDownloadURL().then((url) => {
      this.url = url;
    });
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
