<template lang="pug">
  div
    at-table(
      :dataList="dataList"
    )
      template(v-slot:header="slotProps")
        at-lazy-image(
          :src="slotProps.data.image.path"
          :alt="slotProps.data.title"
          :styles="styles.atLazyImage"
        )
      template(v-slot:data="slotProps")
        at-nl2br-text(
          :text="slotProps.data.text"
        )
        template(
          v-if="isLoginAdmin"
        )
          mo-two-event-button(
            classNameLeft="atButtonLeft"
            classNameRight="atButtonRight"
            :dataID="slotProps.data.id"
            :styles="styles.moTwoButton"
            @click-button-left="confirmDelete"
            @click-button-right="clickEdit"
          )
            template(v-slot:first) 削除
            template(v-slot:second) 編集
    template(
      v-if="isLoginAdmin"
    )
      mo-confirm-modal(
        :modalName="PERMIT_DELETE_SKILL"
        @click-action="actionDelete"
        :confirmText="`「${targetDeleteTitle}」を削除しますか？`"
      )
</template>

<script>
import { mapActions } from 'vuex';
import { AC_DELETE_DATA } from '@/store/skill/actions/deleteData';
import { PERMIT_DELETE_SKILL } from '@/defines';
import AtLazyImage from '@/components/atoms/image/AtLazyImage';
import AtTable from '@/components/atoms/list/AtTable';
import AtNl2brText from '@/components/atoms/text/AtNl2brText';
import MoTwoEventButton from '@/components/molecules/button/MoTwoEventButton';
import MoConfirmModal from '@/components/molecules/modal/MoConfirmModal';

export default {
  components: {
    AtLazyImage,
    AtTable,
    AtNl2brText,
    MoTwoEventButton,
    MoConfirmModal,
  },
  props: {
    dataList: {
      type: Array,
      required: true,
    },
    isLoginAdmin: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      dataID: '',
    };
  },
  computed: {
    targetDeleteTitle() {
      if (!this.dataID) return null;
      return (this.dataList.find(data => data.id === parseInt(this.dataID, 10)).title);
    },
    PERMIT_DELETE_SKILL: () => PERMIT_DELETE_SKILL,
    styles() {
      return {
        atLazyImage: {
          lazyWrapper: {
            width: '100px',
            height: '100%',
            minHeight: '100px',
          },
          lazyImage: {
            width: '100px',
          },
        },
        moTwoButton: {
          justifyContent: 'flex-end',
          marginTop: '1rem',
        },
      };
    },
  },
  methods: {
    ...mapActions('skill', [AC_DELETE_DATA]),
    confirmDelete(eventTarget) {
      this.dataID = eventTarget.dataset.dataid;
      this.$modal.show(PERMIT_DELETE_SKILL);
    },
    clickEdit(eventTarget) {
      this.$router.push({
        name: 'skillEdit',
        params: {
          id: eventTarget.dataset.dataid,
        },
      });
    },
    actionDelete() {
      this[AC_DELETE_DATA](parseInt(this.dataID, 10));
      this.$modal.hide(PERMIT_DELETE_SKILL);
      this.$router.push({ name: 'root' });
    },
  },
};
</script>
