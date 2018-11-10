<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
  .workList {
    width: 18%;
    margin: 0 2.5% 2.5% 0;
    &:nth-child(5n) {
      margin-right: 0;
    }
    a {
      text-decoration: none;
      display: block;
      .image {
        overflow: hidden;
        img {
          display: block;
          transform: scale(1);
          transition: $transition;
          border-radius: $border-radius;
          width: 100%;
        }
      }
      &:hover {
        .image {
          img {
            transform: scale(1.05);
          }
        }
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

<template>
  <li class="workList">
    <a :href="'/works/' + work.id">
      <div class="image">
        <img :src="work.image_path" width="200" :alt="work.title" />
      </div>
      <p class="title">{{work.title}}</p>
      <ul class="tagList">
        <li v-for="(tag, index) in work.tags" :key="index">
          {{tag}}
        </li>
      </ul>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    work: Object,
  },
};
</script>
