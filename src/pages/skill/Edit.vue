<template lang="pug">
  div
    title-block edit skill
    edit-skill
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import EditSkill from '@/components/skill/Edit';

export default {
  created() {
    if (!this.$store.state.admin) {
      this.$router.push({ name: 'root' });
    }
  },
  components: {
    TitleBlock,
    EditSkill,
  },
};
</script>
