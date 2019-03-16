<style lang="scss">
  @import 'assets/sass/styles';
</style>

<template lang="pug">
  div#app
    header-block
    nav-link
    div.l-container
      router-view
    footer-block
</template>

<script>
import HeaderBlock from './components/Header';
import NavLink from './components/NavLink';
import FooterBlock from './components/Footer';

export default {
  name: 'app',
  components: {
    HeaderBlock,
    NavLink,
    FooterBlock,
  },
};
</script>
