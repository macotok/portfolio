<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Work
      or-list-pager(
        pageType="work"
        targetKey="db"
        :actionType="AC_PAGER_NUMBER"
        :list="workList"
        :pagerNumber="pagerNumber"
        :length="workLength"
      )
    or-footer
</template>

<script>
import { AC_PAGER_NUMBER } from '@/store/work/actions/pagerNumber';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import OrListPager from '@/components/organisms/OrListPager';

export default {
  components: {
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
  },
};
</script>
