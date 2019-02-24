<template>
  <div>
    <title-block title="add Skill"></title-block>
    <add-skill></add-skill>
  </div>
</template>

<script>
import TitleBlock from '../../components/TitleBlock';
import AddSkill from '../../components/skill/Add';

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
