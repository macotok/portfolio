<template lang="pug">
  div
    title-block Skills
    skill-list(:skill="skillData", page="list")
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import SkillList from '@/components/skill/List';
import { WORKS_START_NUMBER } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  computed: {
    skillData() {
      return sortUpdatedAt(this.$store.state.skill);
    },
  },
  created() {
    this.$store.dispatch('worksPaginationNUmber', {
      pagerNumber: WORKS_START_NUMBER,
    });
  },
  components: {
    TitleBlock,
    SkillList,
  },
};
</script>
