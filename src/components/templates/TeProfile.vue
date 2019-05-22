<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    .l-container
      at-title-h2 Profile
      .teProfile
        or-side-block
        div.teProfile-list
          at-dl-dt-dd(
            title="今までしてきたこと"
            :list="list.can"
            :styles="styles"
          )
          at-dl-dt-dd(
            title="これからしたいこと"
            :list="list.will"
            :styles="styles"
          )
          at-dl-dt-dd(
            title="続けていること"
            :list="list.routine"
            :styles="styles"
          )
          at-dl-dt-dd(
            title="好きなもの"
            :list="list.like"
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
import OrSideBlock from '@/components/organisms/Profile/OrSideBlock';
import {
  CAN_LIST, WILL_LIST, ROUTINE_LIST, LIKE_LIST,
} from '@/defines/profile';

export default {
  components: {
    AtDlDtDd,
    AtTitleH2,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    OrSideBlock,
  },
  computed: {
    list() {
      return {
        can: CAN_LIST,
        will: WILL_LIST,
        routine: ROUTINE_LIST,
        like: LIKE_LIST,
      };
    },
    styles() {
      return {
        dl: {
          marginBottom: '2rem',
        },
        dt: {
          fontWeight: 'bold',
          marginBottom: '1rem',
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

<style lang="scss">
.teProfile {
  display: flex;
  &-list {
    margin-left: 5rem;
  }
}
</style>
