<template>
  <div>
    <title-block>
      edit Work
    </title-block>
    <edit-work></edit-work>
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import EditWork from '@/components/work/Edit';

export default {
  created() {
    if (!this.$store.state.admin) {
      this.$router.push({ name: 'root' });
    }
  },
  components: {
    TitleBlock,
    EditWork,
  },
};
</script>
