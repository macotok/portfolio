<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 About this Portfolio
      at-dl-dt-dd(
        :titleList="profileList.title"
        :list="profileList.list"
        :styles="styles.dl"
      )
      at-text(
        :styles="styles.text"
      )
        | このサイトはGitHubで管理しています。
        br
        | そのリポジトリはこちらになります。
      at-href-button(
        href="https://github.com/macotok/portfolio"
        target="_blank"
      ) To GitHub
    or-footer
</template>

<script>
import AtHrefButton from '@/components/atoms/button/AtHrefButton';
import AtDlDtDd from '@/components/atoms/list/AtDlDtDd';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import AtText from '@/components/atoms/text/AtText';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import { TITLE, LIST } from '@/defines/about';

export default {
  components: {
    AtDlDtDd,
    AtHrefButton,
    AtTitleH2,
    AtText,
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
        dl: {
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
        },
        text: {
          margin: '4rem 0 1rem',
        },
      };
    },
  },
};
</script>
