<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Skill
      template(
        v-if="skillList.length"
      )
        or-list(
          :dataList="skillList"
          :isLoginAdmin="isLoginAdmin"
        )
      at-text(
        v-else
      ) {{ NOT_POST_MESSAGE }}
    or-footer
</template>

<script>
import { NOT_POST_MESSAGE } from '@/defines';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import AtText from '@/components/atoms/text/AtText';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import OrList from '@/components/organisms/Skill/OrList';

export default {
  components: {
    AtText,
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
    isLoginAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    NOT_POST_MESSAGE: () => NOT_POST_MESSAGE,
  },
};
</script>
