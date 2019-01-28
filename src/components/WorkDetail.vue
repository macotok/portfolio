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
          @include skill($margin: 0 .5rem .5rem 0);
        }
      }
      .url {
        text-align: right;
        margin-bottom: .5rem;
        a {
          color: $link-color;
          &:hover {
            text-decoration: none;
          }
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
        <p class="url"><a :href="data.url" target="_blank">作品ページへ</a></p>
        <p class="text">{{data.text}}</p>
      </div>
    </div>
    <button @click="edit">編集</button>
  </div>
</template>

<script>
import TitleBlock from './TitleBlock';

export default {
  props: {
    data: Object,
  },
  methods: {
    edit() {
      this.$router.push({ name: 'root' });
    },
  },
  components: {
    TitleBlock,
  },
};
</script>
