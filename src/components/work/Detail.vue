<style scoped lang="scss">
  @import "../../assets/sass/styles";
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
      width: 100%;
      .tagList {
        display: flex;
        flex-wrap: wrap;
        li {
          @include skill($margin: 0 .5rem .5rem 0);
        }
      }
    }
    .m-button-01 {
      margin-top: 2rem;
    }
  }
  .buttonBlock {
    display: flex;
    flex-direction: row-reverse;
    div {
      margin-left: 1rem;
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
        <p class="text">{{data.text}}</p>
        <div class="m-button-01">
          <a class="m-button-01-link" :href="data.url" target="_blank">作品ページ</a>
        </div>
      </div>
    </div>
    <div class="buttonBlock">
      <edit-button
        text="編集"
        :editId="getWorkId"
        type="work"
      >
      </edit-button>
      <delete-button
        text="削除"
      >
      </delete-button>
    </div>
  </div>
</template>

<script>
import TitleBlock from '../TitleBlock';
import EditButton from '../button/EditButton';
import DeleteButton from '../button/DeleteButton';

export default {
  props: {
    data: Object,
  },
  computed: {
    getWorkId() {
      return this.$route.params.id;
    },
  },
  components: {
    TitleBlock,
    EditButton,
    DeleteButton,
  },
};
</script>
