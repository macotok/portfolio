<template lang="pug">
  div
    title-block edit skill
    input-form
</template>

<script>
import { mapState } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import InputForm from '@/components/skill/InputForm';

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
