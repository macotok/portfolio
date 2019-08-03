<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 Work
      template(
        v-if="workList.length"
      )
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
      template(
        v-if="skillList.length"
      )
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
      template(
        v-if="isLoginAdmin"
      )
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
import MoImageList from '@/components/molecules/list/MoImageList';
import MoTextList from '@/components/molecules/list/MoTextList';
import OrFooter from '@/components/organisms/OrFooter';
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
    isLoginAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    skillTitle() {
      const titleList = [];
      if (this.skillList.length) {
        this.skillList.forEach((skill) => {
          titleList.push(skill.title);
        });
        return titleList;
      }
      return null;
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
