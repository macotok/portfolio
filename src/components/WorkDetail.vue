<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
  .workDetail {
    display: flex;
    .image {
      img {
        display: block;
        border-radius: $border-radius;
      }
    }
    .content {
      padding-left: 2.5%;
      .tagList {
        display: flex;
        flex-wrap: wrap;
        li {
          @include skill($margin: 0 10px 10px 0);
        }
      }
    }
  }
</style>

<template>
  <div>
    <title-block :title=data.title></title-block>
    <div class="workDetail">
      <div class="image"><img :src="data.image_path" :alt="data.title" width="300"></div>
      <div class="content">
        <ul class="tagList">
          <li v-for="(tag, index) in data.tags" :key="index">
            {{tag}}
          </li>
        </ul>
        <p>{{data.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBlock from './TitleBlock';

export default {
  props: {
    data: Object,
  },
  components: {
    TitleBlock,
  },
};
</script>
