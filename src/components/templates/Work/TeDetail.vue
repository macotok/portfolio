<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    div.l-container
      at-title-h2 {{ data.title }}
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
