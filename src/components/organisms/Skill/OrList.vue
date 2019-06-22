<template lang="pug">
  div
    at-table(
      :dataList="dataList"
    )
      template(v-slot:header="slotProps")
        at-image(
          :src="slotProps.data.image.path"
          :alt="slotProps.data.title"
          :width=75
        )
      template(v-slot:data="slotProps")
        at-text {{ slotProps.data.text }}
        mo-two-button(
          classNameLeft="atButtonLeft"
          classNameRight="atButtonRight"
          :dataID="slotProps.data.id"
          :styles="styles"
          @click-button-left="confirmDelete"
          @click-button-right="clickEdit"
        )
          template(v-slot:first) 削除
          template(v-slot:second) 編集
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
import AtTable from '@/components/atoms/list/AtTable';
import AtText from '@/components/atoms/text/AtText';
import AtImage from '@/components/atoms/image/AtImage';
import MoTwoButton from '@/components/molecules/MoTwoButton';
import MoConfirmModal from '@/components/molecules/MoConfirmModal';

export default {
  components: {
    AtTable,
    AtText,
    AtImage,
    MoTwoButton,
    MoConfirmModal,
  },
  props: {
    dataList: {
      type: Array,
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
        justifyContent: 'flex-end',
        marginTop: '1rem',
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
      this[AC_DELETE_DATA](this.dataID);
      this.$modal.hide(PERMIT_DELETE_SKILL);
      this.$router.push({ name: 'root' });
    },
  },
};
</script>
