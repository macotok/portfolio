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
import { mapState, mapActions } from 'vuex';
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
    this.worksPaginationNUmber({ pagerNumber: WORKS_START_NUMBER });
  },
  computed: {
    ...mapState({
      worksData(state) {
        return sortUpdatedAt(state.works);
      },
      skillData(state) {
        return sortUpdatedAt(state.skill);
      },
    }),
    worksCount() {
      return WORKS_LIST_TOP_LENGTH;
    },
  },
  methods: {
    ...mapActions(['worksPaginationNUmber']),
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
