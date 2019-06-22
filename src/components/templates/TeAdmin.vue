<template lang="pug">
  div.teAdmin
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Admin
      at-text 管理者用アカウントのみログインできます。
      at-button(
        :styles="styles.AtButton"
        href="https://github.com/macotok/portfolio"
      ) ログインする
    or-footer
</template>

<script>
import AtButton from '@/components/atoms/button/AtButton';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import AtText from '@/components/atoms/text/AtText';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtButton,
    AtTitleH2,
    AtText,
    OrFooter,
    OrHeader,
    OrHeaderNav,
  },
  computed: {
    styles() {
      return {
        AtButton: {
          button: {
            display: 'block',
            textAlign: 'center',
            marginTop: '2rem',
          },
        },
      };
    },
  },
};
</script>
