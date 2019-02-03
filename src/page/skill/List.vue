<template>
  <div>
    <title-block title="Skills"></title-block>
    <skill :skill="sharedState.skill" page="list"></skill>
  </div>
</template>

<script>
import TitleBlock from '../../components/TitleBlock';
import Skill from '../../components/skill/List';
import { WORKS_START_NUMBER } from '../../defines';

export default {
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
    Skill,
  },
};
</script>
