<template lang="pug">
  div
    title-block add Work
    work-add
</template>

<script>
import { mapState } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import WorkAdd from '@/components/work/Add';

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
    WorkAdd,
  },
};
</script>
