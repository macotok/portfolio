<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    div.l-container
      at-title-h2 Work
      mo-image-list(
        :list="workList"
        :listStart="workListStart"
        :length="workLength"
      )
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import MoImageList from '@/components/molecules/MoImageList';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtTitleH2,
    MoImageList,
    OrFooter,
    OrHeader,
    OrHeaderNav,
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
    workListStart: {
      type: Number,
      required: true,
    },
  },
};
</script>
