<template lang="pug">
  div
    title-block Works
    work-list(
      :works="worksData",
      :start="0",
      :count="worksCount"
    )
    more-button(linkTo="works") More
    title-block Skills
    skill-list(:skill="skillData", page="top")
    more-button(linkTo="skills") More
    title-block Profile
    Profile(page="top")
    more-button(linkTo="profile") More
    title-block About this Portfolio
    About
    more-button(linkTo="about") More
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import WorkList from '@/components/work/List';
import SkillList from '@/components/skill/List';
import MoreButton from '@/components/button/More';
import Profile from '@/components/profile/Top';
import About from '@/components/about/Top';
import { WORKS_LIST_TOP_LENGTH, WORKS_START_NUMBER } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  created() {
    this.$store.dispatch('worksPaginationNUmber', {
      pagerNumber: WORKS_START_NUMBER,
    });
  },
  computed: {
    worksData() {
      return sortUpdatedAt(this.$store.state.works);
    },
    skillData() {
      return sortUpdatedAt(this.$store.state.skill);
    },
    worksCount() {
      return WORKS_LIST_TOP_LENGTH;
    },
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
