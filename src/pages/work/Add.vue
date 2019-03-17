<template lang="pug">
  div
    title-block add Work
    input-form
</template>

<script>
import { mapState } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import InputForm from '@/components/work/InputForm';

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
    InputForm,
  },
};
</script>
