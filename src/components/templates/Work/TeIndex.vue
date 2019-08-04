<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Work
      template(
        v-if="workList.length"
      )
        or-list-pager(
          pageType="work"
          targetKey="db"
          :actionType="AC_PAGER_NUMBER"
          :list="workList"
          :pagerNumber="pagerNumber"
          :length="workLength"
        )
      at-text(
        v-else
      ) {{ NOT_POST_MESSAGE }}
    or-footer
</template>

<script>
import { NOT_POST_MESSAGE } from '@/defines';
import { AC_PAGER_NUMBER } from '@/store/work/actions/pagerNumber';
import AtText from '@/components/atoms/text/AtText';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import OrListPager from '@/components/organisms/OrListPager';

export default {
  components: {
    AtText,
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    OrListPager,
  },
  props: {
    workLength: {
      type: Number,
      required: true,
    },
    workList: {
      type: Array,
      default: () => [],
    },
    pagerNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    AC_PAGER_NUMBER: () => (AC_PAGER_NUMBER),
    NOT_POST_MESSAGE: () => NOT_POST_MESSAGE,
  },
};
</script>
