<template>
  <div>
    <skill :skill="sharedState.skill" page="list"></skill>
  </div>
</template>

<script>
import Skill from '../components/Skill';

export default {
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  components: {
    Skill,
  },
};
</script>
