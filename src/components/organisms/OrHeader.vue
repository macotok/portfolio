<template lang="pug">
  header.orHeader
    at-title-h1 Portfolio
    div.orHeader-icon
      at-hamburger-menu(
        @click-button="clickButton"
      )
    MoDrawerMenu(
      :modalName="DRAWER_MENU"
      width="100%"
      height="100%"
    )
</template>

<script>
import { DRAWER_MENU } from '@/defines';
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';
import AtHamburgerMenu from '@/components/atoms/button/AtHamburgerMenu';
import MoDrawerMenu from '@/components/molecules/modal/MoDrawerMenu';

export default {
  components: {
    AtTitleH1,
    AtHamburgerMenu,
    MoDrawerMenu,
  },
  computed: {
    DRAWER_MENU: () => DRAWER_MENU,
  },
  methods: {
    clickButton() {
      this.$modal.show(DRAWER_MENU);
    },
  },
};
</script>
