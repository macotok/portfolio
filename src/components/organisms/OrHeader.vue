<template lang="pug">
  header.orHeader
    at-title-h1 Portfolio
    div.orHeader-icon
      at-hamburger-menu
</template>

<script>
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';
import AtHamburgerMenu from '@/components/atoms/button/AtHamburgerMenu';

export default {
  components: {
    AtTitleH1,
    AtHamburgerMenu,
  },
};
</script>
