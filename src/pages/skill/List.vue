<template>
  <div>
    <title-block title="Skills"></title-block>
    <skill-list
      :skill="skillData"
      page="list"
    >
    </skill-list>
  </div>
</template>

<script>
import TitleBlock from '../../components/TitleBlock';
import SkillList from '../../components/skill/List';
import { WORKS_START_NUMBER } from '../../defines';
import sortUpdatedAt from '../../utils/sortUpdatedAt';

export default {
  computed: {
    skillData() {
      return sortUpdatedAt(this.$store.state.skill);
    },
  },
  created() {
    this.$store.state.worksPaginationNUmber = WORKS_START_NUMBER;
  },
  components: {
    TitleBlock,
    SkillList,
  },
};
</script>
