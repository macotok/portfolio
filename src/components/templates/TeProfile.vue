<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    .l-container
      at-title-h2 Profile
      or-side-block
      div
        at-dl-dt-dd(
          title="今までしてきたこと"
          :list="list.can"
        )
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtDlDtDd from '@/components/atoms/list/AtDlDtDd';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import OrSideBlock from '@/components/organisms/Profile/OrSideBlock';
import CAN_LIST from '@/defines/profile';

export default {
  components: {
    AtDlDtDd,
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    OrSideBlock,
  },
  computed: {
    list() {
      return {
        can: CAN_LIST,
      };
    },
  },
};
</script>
