<template lang="pug">
  div
    title-block Skills
    skill-list(:skill="skillData", page="list")
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TitleBlock from '@/components/TitleBlock';
import SkillList from '@/components/skill/List';
import { WORKS_START_NUMBER } from '@/defines';
import sortUpdatedAt from '@/utils/sortUpdatedAt';

export default {
  created() {
    this.worksPaginationNUmber({ pagerNumber: WORKS_START_NUMBER });
  },
  computed: {
    ...mapState({
      skillData(state) {
        return sortUpdatedAt(state.skill);
      },
    }),
  },
  methods: {
    ...mapActions(['worksPaginationNUmber']),
  },
  components: {
    TitleBlock,
    SkillList,
  },
};
</script>
