<style scoped lang="scss">
  @import "../../assets/sass/styles";
  .workList {
    width: 23.125%;
    margin: 0 2.5% 2.5% 0;
    &:nth-child(4n) {
      margin-right: 0;
    }
    a {
      text-decoration: none;
      display: block;
      .image {
        img {
          display: block;
          border-radius: $border-radius;
          margin: 0 auto;
        }
      }
      &:hover {
        .tagList {
          li {
            background-color: $white-color;
            color: $sub-color;
          }
        }
      }
      .title {
        color: $key-color;
        font-weight: bold;
        margin: .5em 0;
      }
      .tagList {
        display: flex;
        flex-wrap: wrap;
        li {
          @include skill();
        }
      }
    }
  }
</style>

<template lang="pug">
  li.workList
    router-link(:to="'/work/' + work.id")
      div.image
        img(:src="work.image_path", width="200", :alt="work.title")
      p.title {{work.title}}
      ul.tagList
        li(v-for="(tag, index) in work.tags", :key="index") {{tag}}
</template>

<script>
export default {
  props: {
    work: Object,
  },
};
</script>
