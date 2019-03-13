<template lang="pug">
  div
    title-block edit skill
    edit-skill
</template>

<script>
import { mapState } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import EditSkill from '@/components/skill/Edit';

export default {
  mounted() {
    if (!this.isAdmin) {
      this.$router.push({ name: 'root' });
    }
  },
  computed: {
    ...mapState({
      isAdmin: 'admin',
    }),
  },
  components: {
    TitleBlock,
    EditSkill,
  },
};
</script>
