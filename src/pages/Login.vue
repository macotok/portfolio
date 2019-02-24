<template>
  <div>
    <p @click="login">ログインする</p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        if (user.uid === process.env.FIRE_BASE.UID) {
          this.$store.state.admin = true;
        }
      }).catch(() => {
      });
    },
  },
};
</script>
