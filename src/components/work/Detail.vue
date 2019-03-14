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

<template lang="pug">
  div
    title-block {{data.title}}
    div.workDetail
      div.image
        img(:src="data.image_path", :alt="data.title", width="300")
      div.content
        ul.tagList
          li(v-for="(tag, index) in data.tags", :key="index") {{tag}}
        nl2br(tag="p", :text="data.text", className="text")
        link-button(:linkTo="data.url", :targetBlank="true") To page
    div.m-buttonBlock-01(v-if="isAdmin")
      edit-button(:editId="getWorkId", type="work") 編集
      delete-button(eventName="openModal", @openModal="openModal") 削除
    delete-permission(
      :deleteTitle="getTitle",
      type="works",
      :deleteId="getWorkId",
    )
</template>

<script>
import { mapState } from 'vuex';
import Nl2br from 'vue-nl2br';
import TitleBlock from '@/components/TitleBlock';
import EditButton from '@/components/button/Edit';
import DeleteButton from '@/components/button/Delete';
import LinkButton from '@/components/button/Link';
import DeletePermission from '@/components/modal/DeletePermission';

export default {
  props: {
    data: Object,
  },
  computed: {
    ...mapState({
      isAdmin: 'admin',
      getTitle(state) {
        return state.works.find(w => (
          w.id === parseInt(this.getWorkId, 10)
        )).title;
      },
    }),
    getWorkId() {
      return this.$route.params.id;
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
    LinkButton,
    DeletePermission,
    Nl2br,
  },
};
</script>
