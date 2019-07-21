<template lang="pug">
  div.teAdmin
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Admin
      at-text 管理者用アカウントのみログインできます。
      at-event-button(
        :styles="styles.AtButton"
        @click-button="login"
      ) ログインする
    or-footer
</template>

<script>
import firebase from 'firebase';
import { mapState, mapActions } from 'vuex';
import { AC_LOGIN_ADMIN } from '@/store/admin/actions/loginAdmin';
import AtEventButton from '@/components/atoms/button/AtEventButton';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import AtText from '@/components/atoms/text/AtText';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtEventButton,
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
  methods: {
    ...mapActions('admin', [AC_LOGIN_ADMIN]),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        if (result.user.uid === process.env.UID) {
          this[AC_LOGIN_ADMIN](true);
          this.$router.push({ name: 'root' });
        }
      }).catch(() => {
      });
    },
  },
};
</script>
