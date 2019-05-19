<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    .l-container
      at-title-h2 Profile
      or-side-block
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import OrSideBlock from '@/components/organisms/Profile/OrSideBlock';

export default {
  components: {
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    OrSideBlock,
  },
};
</script>
