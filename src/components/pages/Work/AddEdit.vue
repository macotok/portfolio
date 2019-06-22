<template lang="pug">
  div
    te-add-edit(
      nameSpace="work"
      :actionType="AC_UPDATE_INPUT"
      :isEditPage="isEditPage"
    )
</template>

<script>
import TeAddEdit from '@/components/templates/Work/TeAddEdit';
import { AC_UPDATE_INPUT } from '@/store/work/actions/updateInput';

export default {
  components: {
    TeAddEdit,
  },
  computed: {
    AC_UPDATE_INPUT: () => AC_UPDATE_INPUT,
    isEditPage() {
      return this.$route.params.id;
    },
  },
};
</script>
