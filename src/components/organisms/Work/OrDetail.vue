<template lang="pug">
  div.WorkOrDetail
    at-lazy-image(
      className="WorkOrDetail-img"
      :src="data.image ? data.image.path : ''"
      :alt="data.title"
      :styles="styles.atLazyImage"
    )
    div.WorkOrDetail-inner
      mo-text-list(
        :list="data.tags"
        :styles="styles.moTextList"
      )
      template(v-if="featureData")
        AtTable02(
          :data="featureData"
          keyName="feature"
        )
      at-title-h3 Point
      at-nl2br-text(
        :text="data.text"
      )
      at-href-button(
        :styles="styles.atButton"
        :href="data.url"
      ) To Page
      div
        template(v-if="prevDataId")
          div.prev
            router-link(
              class="moImageList-link"
              :to="`/work/${prevDataId}`"
            ) Prev
        template(v-if="nextDataId")
          div.next
            router-link(
              class="moImageList-link"
              :to="`/work/${nextDataId}`"
            ) Next
      template(
        v-if="isLoginAdmin"
      )
        mo-two-button(
          classNameLeft="atButtonLeft"
          classNameRight="atButtonRight"
          @click-button-left="confirmDelete"
          @click-button-right="clickEdit"
          :styles="styles.moTwoButton"
        )
          template(v-slot:first) 削除
          template(v-slot:second) 編集
    template(
      v-if="isLoginAdmin"
    )
      mo-confirm-modal(
        :modalName="PERMIT_DELETE_WORK"
        @click-action="actionDelete"
        :confirmText="`「${targetDeleteTitle}」を削除しますか？`"
      )
</template>

<script>
import { mapActions } from 'vuex';
import { AC_DELETE_DATA } from '@/store/work/actions/deleteData';
import { PERMIT_DELETE_WORK } from '@/defines';
import featureList from '@/defines/work/featureList';
import AtTitleH3 from '@/components/atoms/text/AtTitleH3';
import AtHrefButton from '@/components/atoms/button/AtHrefButton';
import AtLazyImage from '@/components/atoms/image/AtLazyImage';
import AtNl2brText from '@/components/atoms/text/AtNl2brText';
import AtTable02 from '@/components/atoms/list/AtTable02';
import MoTextList from '@/components/molecules/list/MoTextList';
import MoTwoButton from '@/components/molecules/button/MoTwoButton';
import MoConfirmModal from '@/components/molecules/modal/MoConfirmModal';

export default {
  components: {
    AtTitleH3,
    AtHrefButton,
    AtLazyImage,
    AtNl2brText,
    AtTable02,
    MoTextList,
    MoTwoButton,
    MoConfirmModal,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    dataList: {
      type: Array,
      default: () => [],
    },
    isLoginAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        atButton: {
          button: {
            marginTop: '2rem',
          },
        },
        moTextList: {
          ul: {
            marginBottom: '1rem',
          },
        },
        moTwoButton: {
          justifyContent: 'flex-end',
        },
        atLazyImage: {
          lazyWrapper: {
            height: '100%',
            minHeight: '150px',
          },
          lazyImage: {
            maxWidth: '500px',
            marginBottom: '2rem',
            border: '1px solid #F6F9FF',
          },
        },
      };
    },
    targetDeleteTitle() {
      return this.data.title;
    },
    PERMIT_DELETE_WORK: () => PERMIT_DELETE_WORK,
    featureData() {
      return featureList.find(f => f.id === this.data.id);
    },
    prevDataId() {
      const dataIndex = this.dataList.findIndex(d => d.id === this.data.id);
      if (!dataIndex) return false;
      return this.dataList[dataIndex - 1].id;
    },
    nextDataId() {
      const dataIndex = this.dataList.findIndex(d => d.id === this.data.id);
      if (dataIndex === (this.dataList.length - 1)) return false;
      return this.dataList[dataIndex + 1].id;
    },
  },
  methods: {
    ...mapActions('work', [AC_DELETE_DATA]),
    confirmDelete() {
      this.$modal.show(PERMIT_DELETE_WORK);
    },
    clickEdit() {
      this.$router.push({ name: 'workEdit' });
    },
    actionDelete() {
      this[AC_DELETE_DATA](this.data.id);
      this.$modal.hide(PERMIT_DELETE_WORK);
      this.$router.push({ name: 'root' });
    },
  },
};
</script>
