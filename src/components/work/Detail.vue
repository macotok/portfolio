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
        <nl2br tag="p" :text="data.text" className="text" />
        <div class="m-button-01">
          <a class="m-button-01-link" :href="data.url" target="_blank">To page</a>
        </div>
      </div>
    </div>
    <div v-if="isAdmin" class="m-buttonBlock-01">
      <edit-button
        text="編集"
        :editId="getWorkId"
        type="work"
      >
      </edit-button>
      <delete-button
        text="削除"
        eventName="openModal"
        @openModal="openModal"
      >
      </delete-button>
    </div>
    <delete-permission
      :deleteTitle="getTitle"
      type="work"
      :deleteId="getWorkId"
      commitName="removeWork"
    >
    </delete-permission>
  </div>
</template>

<script>
import Nl2br from 'vue-nl2br';
import TitleBlock from '@/components/TitleBlock';
import EditButton from '@/components/button/Edit';
import DeleteButton from '@/components/button/Delete';
import DeletePermission from '@/components/modal/DeletePermission';

export default {
  props: {
    data: Object,
  },
  computed: {
    getWorkId() {
      return this.$route.params.id;
    },
    getTitle() {
      const workList = (this.$store.state.works).find(w => (
        w.id === parseInt(this.getWorkId, 10)
      ));
      return workList.title;
    },
    isAdmin() {
      return this.$store.state.admin;
    },
  },
  methods: {
    openModal() {
      this.$modal.show('deletePermission');
    },
  },
  components: {
    TitleBlock,
    EditButton,
    DeleteButton,
    DeletePermission,
    Nl2br,
  },
};
</script>
