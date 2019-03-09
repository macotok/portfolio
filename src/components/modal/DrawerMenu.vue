<style scoped lang="scss">
  @import "../../assets/sass/styles.scss";
  .menu {
    position: relative;
    nav {
      padding: 65px 0;
      ul {
        text-align: center;
        li {
          padding: 15px 0;
        }
      }
    }
    .close {
      position: absolute;
      top: 22px;
      left: 2.5%;
      z-index: 1;
      &-box {
        display: inline-block;
        width: 30px;
        height: 30px;
        position: relative;
      }
      &-icon::before,
      &-icon::after {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 95%;
        height: 5%;
        margin: -8% 0 0 -42%;
        background: $gray-color-01;
      }
      &-icon::before {
        transform: rotate(-45deg);
      }
      &-icon::after {
        transform: rotate(45deg);
      }
    }
  }
</style>

<template lang="pug">
  modal(
  name="drawerMenu",
  width="100%",
  height="100%"
  )
    div.menu
      nav
        ul
          li(@click="closeModal('root')") Top
          li(@click="closeModal('works')") Works
          li(@click="closeModal('skills')") Skills
          li(@click="closeModal('profile')") Profile
          li(@click="closeModal('about')") About
          li(v-if="isAdmin", @click="closeModal('addWork')") add Work
          li(v-if="isAdmin", @click="closeModal('addSkill')") add Skill
          li(v-if="isAdmin", @click="closeModal('admin')") Admin
      div.close(@click="closeModal(currentRouteName)")
        div.close-box
          span.close-icon
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      isAdmin: 'admin',
    }),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    closeModal(name) {
      this.$modal.hide('drawerMenu');
      this.$router.push({ name });
    },
  },
};
</script>
