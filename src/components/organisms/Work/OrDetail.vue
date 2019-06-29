<template lang="pug">
  div.WorkOrDetail
    at-image(
      :src="data.image.path"
      :alt="data.title"
      width="300"
      height="100%"
    )
    div.WorkOrDetail-inner
      mo-text-list(
        :list="data.tags"
        :styles="styles.moTextList"
      )
      at-text {{ data.text }}
      at-href-button(
        :styles="styles.atButton"
        :href="data.url"
      ) To Page
      mo-two-button(
        classNameLeft="atButtonLeft"
        classNameRight="atButtonRight"
        @click-button-left="confirmDelete"
        @click-button-right="clickEdit"
        :styles="styles.moTwoButton"
      )
        template(v-slot:first) 削除
        template(v-slot:second) 編集
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
import AtImage from '@/components/atoms/image/AtImage';
import AtText from '@/components/atoms/text/AtText';
import MoTextList from '@/components/molecules/MoTextList';
import MoTwoButton from '@/components/molecules/MoTwoButton';
import MoConfirmModal from '@/components/molecules/MoConfirmModal';

export default {
  components: {
    AtHrefButton,
    AtImage,
    AtText,
    MoTextList,
    MoTwoButton,
    MoConfirmModal,
  },
  props: {
    data: {
      type: Object,
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
