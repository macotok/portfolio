<template lang="pug">
  div
    title-block add Work
    work-add
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import WorkAdd from '@/components/work/Add';

export default {
  created() {
    if (!this.$store.state.admin) {
      this.$router.push({ name: 'root' });
    }
  },
  components: {
    TitleBlock,
    WorkAdd,
  },
};
</script>
