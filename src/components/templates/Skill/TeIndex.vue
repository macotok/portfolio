<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Skill
      or-list(
        :dataList="skillList"
      )
    or-footer
</template>

<script>
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import OrList from '@/components/organisms/Skill/OrList';

export default {
  components: {
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    OrList,
  },
  props: {
    skillList: {
      type: Array,
      required: true,
    },
  },
};
</script>
