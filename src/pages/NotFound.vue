<style scoped lang="scss">
  .title {
    font-size: 300%;
    text-align: center;
    padding: 50px 0;
  }
  .text {
    text-align: center;
  }
  .m-button-01 {
    display: block;
    text-align: center;
    padding-top: 50px;
  }
</style>

<template lang="pug">
  div
    p.title 404 Not Found
    p.text
      | お探しのページは見つかりませんでした。
      br
      | トップページへ戻ってごゆっくりPortfolioをご覧ください。
    more-button(linkTo="root") Please enjoy this Portfolio!

</template>

<script>
import MoreButton from '@/components/button/More';

export default {
  components: {
    MoreButton,
  },
};
</script>
