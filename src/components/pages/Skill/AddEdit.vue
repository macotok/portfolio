<template lang="pug">
  div
    te-add-edit(
      nameSpace="skill"
      :actionType="AC_UPDATE_INPUT"
      :isEditPage="isEditPage"
    )
</template>

<script>
import TeAddEdit from '@/components/templates/Skill/TeAddEdit';
import { AC_UPDATE_INPUT } from '@/store/skill/actions/updateInput';

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
