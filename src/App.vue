<style lang="scss">
  @import 'assets/sass/styles';
</style>

<template>
  <div id="app">
    <header-block></header-block>
    <nav-link></nav-link>
    <div  class="l-container">
      <router-view/>
    </div>
    <footer-block></footer-block>
  </div>
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
