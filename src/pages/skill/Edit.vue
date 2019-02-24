<template>
  <div>
    <title-block title="edit skill"></title-block>
    <edit-skill></edit-skill>
  </div>
</template>

<script>
import TitleBlock from '../../components/TitleBlock';
import EditSkill from '../../components/skill/Edit';

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
