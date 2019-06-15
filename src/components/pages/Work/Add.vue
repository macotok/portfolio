<template lang="pug">
  div
    te-add(
      nameSpace="work"
      :actionType="AC_UPDATE_INPUT_WORK"
      :isEditPage="isEditPage"
    )
</template>

<script>
import TeAdd from '@/components/templates/Work/TeAdd';
import { AC_UPDATE_INPUT_WORK } from '@/store/work/actions/updateInput';

export default {
  components: {
    TeAdd,
  },
  computed: {
    AC_UPDATE_INPUT_WORK: () => AC_UPDATE_INPUT_WORK,
    isEditPage() {
      return this.$route.params.id;
    },
  },
};
</script>
