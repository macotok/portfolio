<template lang="pug">
  div
    te-add-edit(
      nameSpace="work"
      :actionType="AC_UPDATE_INPUT_WORK"
      :isEditPage="isEditPage"
    )
</template>

<script>
import TeAddEdit from '@/components/templates/Work/TeAddEdit';
import { AC_UPDATE_INPUT_WORK } from '@/store/work/actions/updateInput';

export default {
  components: {
    TeAddEdit,
  },
  computed: {
    AC_UPDATE_INPUT_WORK: () => AC_UPDATE_INPUT_WORK,
    isEditPage() {
      return this.$route.params.id;
    },
  },
};
</script>
