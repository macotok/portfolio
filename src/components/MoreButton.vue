<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
  .moreButton {
    margin-bottom: 2.5%;
    display: flex;
    justify-content: flex-end;
    a {
      display: inline-block;
      text-decoration: none;
      background-color: $link-color;
      color: $white-color;
      padding: 10px 18px;
      text-align: center;
      border-radius: $border-radius;
      font-size: .9rem;
    }
  }
</style>

<template>
  <div class="moreButton">
    <router-link :to="{name: linkTo}">もっと見る</router-link>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
