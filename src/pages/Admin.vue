<style scoped lang="scss">
  .button {
    text-align: center;
  }
</style>

<template>
  <div>
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

export default {
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
};
</script>
