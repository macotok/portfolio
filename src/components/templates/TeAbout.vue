<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    div.l-container
      at-title-h2 About this Portfolio
      at-dl-dt-dd(
        :titleList="profileList.title"
        :list="profileList.list"
        :styles="styles"
      )
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtDlDtDd from '@/components/atoms/list/AtDlDtDd';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import { TITLE, LIST } from '@/defines/about';

export default {
  components: {
    AtDlDtDd,
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
  },
  computed: {
    profileList() {
      return {
        title: TITLE,
        list: LIST,
      };
    },
    styles() {
      return {
        dt: {
          fontWeight: 'bold',
          margin: '2rem 0 1rem',
        },
        dtFirstChild: {
          margin: '0 0 1rem',
        },
        dd: {
          margin: '0 0 .5em 2em',
          display: 'list-item',
          listStyleType: 'circle',
        },
      };
    },
  },
};
</script>
