<style scoped lang="scss">
  .text {
    margin-bottom: 5%;
  }
  .button {
    text-align: center;
  }
</style>

<template lang="pug">
  div
    title-block Admin
    p.text(v-if="privateState.notLogin") ログインに失敗しました。
    p.text(v-else)
      | 管理者用アカウントのみ
      span(v-if="!isAdmin") ログイン
      span(v-else) ログアウト
      | できます。
    div.button(v-if="!isAdmin")
      button.m-button-02-link(@click="login", type="button") ログインする
    div.button(v-else)
      button.m-button-03-link(@click="logout", type="button") ログアウトする
</template>

<script>
import { mapState } from 'vuex';
import firebase from 'firebase';
import TitleBlock from '@/components/TitleBlock';

export default {
  data() {
    return {
      privateState: {
        notLogin: false,
      },
    };
  },
  computed: {
    ...mapState({
      isAdmin: 'admin',
    }),
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        if (result.user.uid === process.env.FIRE_BASE.UID) {
          this.$store.state.admin = true;
          this.$router.push({ name: 'root' });
        } else {
          this.privateState.notLogin = true;
        }
      }).catch(() => {
      });
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$store.state.admin = false;
        this.$router.push({ name: 'root' });
      }).catch(() => {
      });
    },
  },
  components: {
    TitleBlock,
  },
};
</script>
