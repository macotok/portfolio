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
      mo-drawer-list(
        :navList="navList"
        @click-item="clickItem"
      )
      div.moDrawerMenu-icon
        at-close-button(
          @click-button="clickCloseButton"
        )
</template>

<script>
import { mapState } from 'vuex';
import { DRAWER_MENU } from '@/defines';
import NAV_LIST from '@/defines/navList';
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';
import AtHamburgerMenu from '@/components/atoms/button/AtHamburgerMenu';
import AtCloseButton from '@/components/atoms/button/AtCloseButton';
import MoDrawerMenu from '@/components/molecules/modal/MoDrawerMenu';
import MoDrawerList from '@/components/molecules/list/MoDrawerList';

export default {
  components: {
    AtTitleH1,
    AtHamburgerMenu,
    AtCloseButton,
    MoDrawerMenu,
    MoDrawerList,
  },
  computed: {
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
    navList() {
      return this.isLoginAdmin ? NAV_LIST : NAV_LIST.filter(nav => (nav.name !== 'Admin'));
    },
    DRAWER_MENU: () => DRAWER_MENU,
  },
  methods: {
    clickButton() {
      this.$modal.show(DRAWER_MENU);
    },
    clickItem(e) {
      this.$modal.hide(DRAWER_MENU);
      this.$router.push({ name: e.target.dataset.route });
    },
    clickCloseButton() {
      this.$modal.hide(DRAWER_MENU);
      this.$router.push({ name: this.$route.name });
    },
  },
};
</script>
