<template>
  <div>
    <title-block>
      add Work
    </title-block>
    <work-add></work-add>
  </div>
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
