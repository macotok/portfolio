<template lang="pug">
  div
    te-add-edit(
      nameSpace="skill"
      :actionType="AC_UPDATE_INPUT"
      :isEditPage="isEditPage"
    )
</template>

<script>
import { mapState } from 'vuex';
import { AC_UPDATE_INPUT } from '@/store/skill/actions/updateInput';

const TeAddEdit = () => import('@/components/templates/Skill/TeAddEdit');

export default {
  components: {
    TeAddEdit,
  },
  computed: {
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
    AC_UPDATE_INPUT: () => AC_UPDATE_INPUT,
    isEditPage() {
      return this.$route.params.id;
    },
  },
  created() {
    if (!this.isLoginAdmin) {
      this.$router.push({ name: 'root' });
    }
  },
};
</script>
