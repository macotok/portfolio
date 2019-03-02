<template lang="pug">
  div
    title-block add Skill
    add-skill
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import AddSkill from '@/components/skill/Add';

export default {
  created() {
    if (!this.$store.state.admin) {
      this.$router.push({ name: 'root' });
    }
  },
  components: {
    TitleBlock,
    AddSkill,
  },
};
</script>
