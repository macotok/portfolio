<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Work
      mo-image-list(
        pageType="work"
        :list="workList"
        :listStart="workListStart"
        :length="workLength"
      )
      at-router-button(
        linkTo="work"
      ) More
      at-title-h2 Skill
      mo-text-list(
        :list="skillTitle"
      )
      at-router-button(
        linkTo="skill"
      ) More
      at-title-h2 Profile
      at-text(
        :styles="styles.atText"
      )
        | GitHub/Qiitaアカウントのリンク先、
        br
        | 今までしてきたこと、これからしたいことを記載しました。
      at-router-button(
        linkTo="profile"
      ) More
      at-title-h2 About this Portfolio
      at-text(
        :styles="styles.atText"
      )
        | このPortfolioはVue/Firebaseで開発、
        br
        | その開発項目について記載しました。
      at-router-button(
        linkTo="about"
      ) More
      at-title-h2 Add work
      at-router-button(
        linkTo="workAdd"
      ) Add
      at-title-h2 Add skill
      at-router-button(
        linkTo="skillAdd"
      ) Add
    or-footer
</template>

<script>
import AtRouterButton from '@/components/atoms/button/AtRouterButton';
import AtText from '@/components/atoms/text/AtText';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import AtUlLi from '@/components/atoms/list/AtUlLi';
import MoImageList from '@/components/molecules/MoImageList';
import MoTextList from '@/components/molecules/MoTextList';
import OrFooter from '@/components/organisms/OrFooter';
import OrForm from '@/components/organisms/OrForm';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtText,
    AtTitleH2,
    AtUlLi,
    AtRouterButton,
    MoImageList,
    MoTextList,
    OrFooter,
    OrForm,
    OrHeader,
    OrHeaderNav,
  },
  props: {
    workLength: {
      type: Number,
      required: true,
    },
    workList: {
      type: Array,
      default: () => [],
    },
    workListStart: {
      type: Number,
      required: true,
    },
    skillList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    skillTitle() {
      const titleList = [];
      this.skillList.forEach((skill) => {
        titleList.push(skill.title);
      });
      return titleList;
    },
    styles() {
      return {
        atText: {
          marginBottom: '1rem',
        },
      };
    },
  },
};
</script>
