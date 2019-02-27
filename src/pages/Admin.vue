<style scoped lang="scss">
  .text {
    margin-bottom: 5%;
  }
  .button {
    text-align: center;
  }
</style>

<template>
  <div>
    <title-block title="Admin"></title-block>
    <p v-if="privateState.notLogin" class="text">ログインに失敗しました。</p>
    <p v-else class="text">
      管理者用アカウントのみ<span v-if="!isAdmin">ログイン</span><span v-else>ログアウト</span>できます。
    </p>
    <div v-if="!isAdmin" class="button">
      <button @click="login" type="button" class="m-button-02-link">ログインする</button>
    </div>
    <div v-else class="button">
      <button @click="logout" type="button" class="m-button-03-link">ログアウトする</button>
    </div>
  </div>
</template>

<script>
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
    isAdmin() {
      return this.$store.state.admin;
    },
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        if (user.uid === process.env.FIRE_BASE.UID) {
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
