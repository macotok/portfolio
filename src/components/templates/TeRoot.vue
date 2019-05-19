<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    .l-container
      at-title-h2 Work
      or-form(
        :label01="label01"
        :label02="label02"
      )
      at-button(
        linkTo="root"
      ) More
      at-title-h2 Skill
      at-button(
        linkTo="root"
      ) More
      at-title-h2 Profile
      at-text
        | GitHub/Qiitaアカウントのリンク先、
        br
        | 今までしてきたこと、これからしたいことを記載しました。
      at-button(
        linkTo="root"
      ) More
      at-title-h2 About this Portfolio
      at-text
        | このPortfolioはVue/Firebaseで開発、
        br
        | その開発項目について記載しました。
      at-button(
        linkTo="root"
      ) More
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtButton from '@/components/atoms/button/AtButton';
import AtText from '@/components/atoms/text/AtText';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrFooter from '@/components/organisms/OrFooter'
import OrForm from '@/components/organisms/OrForm';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtButton,
    AtText,
    AtTitleH2,
    OrFooter,
    OrForm,
    OrHeader,
    OrHeaderNav,
  },
  props: {
    label01: {
      type: String,
      required: true,
    },
    label02: {
      type: String,
      required: true,
    },
  },
};
</script>
