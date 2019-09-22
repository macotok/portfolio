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
      table.atTable02
        thead
          tr
            th 機能
            th 担当
        tbody
          tr
            td 「イオンのお得なお買い物情報」「おすすめキャンヘーン」「周囲の店舗のお得な情報」「今日は何の日?」
            td 開発要件定義/開発設計/開発工数出し/進捗管理
          tr
            td ヒシュアルの「ローテバナー」
            td 開発要件定義/開発設計/開発工数出し/進捗管理
      .atTitleH3
        .atTitleH3-title 工夫したポイント
      at-nl2br-text(
        :text="data.text"
      )
      at-href-button(
        :styles="styles.atButton"
        :href="data.url"
      ) To Page
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
import AtHrefButton from '@/components/atoms/button/AtHrefButton';
import AtLazyImage from '@/components/atoms/image/AtLazyImage';
import AtNl2brText from '@/components/atoms/text/AtNl2brText';
import MoTextList from '@/components/molecules/list/MoTextList';
import MoTwoButton from '@/components/molecules/button/MoTwoButton';
import MoConfirmModal from '@/components/molecules/modal/MoConfirmModal';

export default {
  components: {
    AtHrefButton,
    AtLazyImage,
    AtNl2brText,
    MoTextList,
    MoTwoButton,
    MoConfirmModal,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
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
            marginBottom: '0',
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
