<template lang="pug">
  div
    at-table(
      :dataList="dataList"
    )
      template(v-slot:header="slotProps")
        at-image(
          :src="slotProps.data.image_path"
          :alt="slotProps.data.title"
          :width=75
        )
      template(v-slot:data="slotProps")
        at-text {{ slotProps.data.text }}
        mo-two-button(
          classNameLeft="atButtonLeft"
          classNameRight="atButtonRight"
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
  computed: {
    targetDeleteTitle() {
      return 'title';
    },
    PERMIT_DELETE_SKILL: () => PERMIT_DELETE_SKILL,
  },
  methods: {
    ...mapActions('skill', [AC_DELETE_DATA]),
    confirmDelete() {
      this.$modal.show(PERMIT_DELETE_SKILL);
    },
    clickEdit() {
      this.$router.push({ name: 'skillEdit' });
    },
    actionDelete() {
      this[AC_DELETE_DATA](this.data.id);
      this.$modal.hide(PERMIT_DELETE_SKILL);
      this.$router.push({ name: 'root' });
    },
  },
};
</script>