<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
 .router-link-active {
   text-decoration: none;
   pointer-events: none;
   color: $white-color;
   background-color: $key-color;
 }
  nav {
    ul {
      display: flex;
      justify-content: center;
      background-color: $gray-color-01;
      li {
        a {
          text-decoration: none;
          display: block;
          padding: 15px 30px;
          background-color: $gray-color-01;
          &:hover {
            color: $white-color;
            background-color: $key-color;
          }
        }
      }
    }
  }
</style>

<template lang="pug">
  div.m-nav-01
    nav
      ul
        li
          router-link(:to="{name: 'root'}", exact) Top
        li
          router-link(:to="{name: 'works'}") Works
        li
          router-link(:to="{name: 'skills'}") Skills
        li
          router-link(:to="{name: 'profile'}") Profile
        li
          router-link(:to="{name: 'about'}") About
        li(v-if="isAdmin")
          router-link(:to="{name: 'addWork'}") add Work
        li(v-if="isAdmin")
          router-link(:to="{name: 'addSkill'}") add Skill
        li(v-if="isAdmin")
          router-link(:to="{name: 'admin'}") Admin
</template>

<script>
export default {
  computed: {
    isAdmin() {
      return this.$store.state.admin;
    },
  },
};
</script>
