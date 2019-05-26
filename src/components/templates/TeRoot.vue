<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    div.l-container
      at-title-h2 Work
      at-button(
        linkTo="root"
        routerLink
      ) More
      at-title-h2 Skill
      at-ul-li(
        :list="skillTitle"
      )
      at-button(
        linkTo="skill"
        routerLink
      ) More
      at-title-h2 Profile
      at-text
        | GitHub/Qiitaアカウントのリンク先、
        br
        | 今までしてきたこと、これからしたいことを記載しました。
      at-button(
        linkTo="profile"
        routerLink
      ) More
      at-title-h2 About this Portfolio
      at-text
        | このPortfolioはVue/Firebaseで開発、
        br
        | その開発項目について記載しました。
      at-button(
        linkTo="about"
        routerLink
      ) More
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtButton from '@/components/atoms/button/AtButton';
import AtText from '@/components/atoms/text/AtText';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import AtUlLi from '@/components/atoms/list/AtUlLi';
import OrFooter from '@/components/organisms/OrFooter';
import OrForm from '@/components/organisms/OrForm';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtButton,
    AtText,
    AtTitleH2,
    AtUlLi,
    OrFooter,
    OrForm,
    OrHeader,
    OrHeaderNav,
  },
  props: {
    skillList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    skillTitle() {
      const titleList = [];
      this.skillList.forEach((s) => {
        titleList.push(s.title);
      });
      return titleList;
    },
  },
};
</script>
