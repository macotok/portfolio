<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 {{ data.title }}
      or-detail(
        :data="data"
        :isLoginAdmin="isLoginAdmin"
      )
    or-footer
</template>

<script>
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import OrDetail from '@/components/organisms/Work/OrDetail';

export default {
  components: {
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    OrDetail,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isLoginAdmin: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
