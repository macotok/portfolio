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
      transition: $transition;
      border: 1px solid $link-color;
      &:hover {
        background-color: $white-color;
        color: $link-color;
      }
    }
  }
</style>

<template>
  <div class="moreButton">
    <router-link :to="{name: linkTo}">More</router-link>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
