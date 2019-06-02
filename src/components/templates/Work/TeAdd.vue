<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    div.l-container
      at-title-h2 add Work
      form
        table
          MoInputText(
            actionType="action01"
            name="name"
          ) タイトル
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import MoInputText from '@/components/molecules/MoInputText';

export default {
  components: {
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    MoInputText,
  },
};
</script>
