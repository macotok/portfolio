<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
  header {
    text-align: center;
    padding: 20px 0;
    background-color: $white-color;
    position: relative;
    h1 {
      letter-spacing: 10px;
      font-weight: normal;
      font-size: 1.4rem;
    }
    .nav {
      position: absolute;
      top: 29px;
      left: 2.5%;
      z-index: 1;
      &-icon {
        position: relative;
        height: 30px;
        width: 42px;
        div {
          position: absolute;
          top: 0;
          left: 0;
          height: 1px;
          width: 30px;
          background-color: $key-color;
          border-radius: $border-radius;
          &:nth-of-type(2) {
            width: 20px;
            top: 10px;
          }
        }
      }
    }
  }
</style>

<template lang="pug">
  header
    h1 Portfolio
    div.nav.is-sp
      div.nav-icon(@click="openDrawerMenu")
        div
        div
    drawer-menu
</template>

<script>
import DrawerMenu from '@/components/modal/DrawerMenu';

export default {
  methods: {
    openDrawerMenu() {
      this.$modal.show('drawerMenu');
    },
  },
  components: {
    DrawerMenu,
  },
};
</script>
