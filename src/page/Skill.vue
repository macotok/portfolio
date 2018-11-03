<template>
  <div>
    <title-block title="Skills"></title-block>
    <skill :skill="sharedState.skill" page="list"></skill>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import Skill from '../components/Skill';

export default {
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  components: {
    TitleBlock,
    Skill,
  },
};
</script>
