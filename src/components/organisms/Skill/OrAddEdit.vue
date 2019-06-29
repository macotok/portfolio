<template lang="pug">
  div.orAddEdit
    table.orAddEdit-table
      MoLabelID(
        v-if="editData.id"
        :numberID="editData.id"
      )
      MoInputText(
        name="title"
        :value="editData.title"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) スキル名
      MoInputFile(
        name="image"
        :src="editData.image.path"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) 画像
      MoInputTextArea(
        name="text"
        :value="editData.text"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) 内容
    at-submit(
      @click-button="clickButton"
    ) 追加
</template>

<script>
import { mapActions } from 'vuex';
import { AC_SAVE_DATA } from '@/store/work/actions/saveData';
import AtLabel from '@/components/atoms/form/AtLabel';
import AtSubmit from '@/components/atoms/form/AtSubmit';
import MoInputFile from '@/components/molecules/form/MoInputFile';
import MoInputText from '@/components/molecules/form/MoInputText';
import MoInputTextArea from '@/components/molecules/form/MoInputTextArea';
import MoLabelID from '@/components/molecules/form/MoLabelID';

export default {
  components: {
    AtLabel,
    AtSubmit,
    MoInputFile,
    MoInputText,
    MoInputTextArea,
    MoLabelID,
  },
  props: {
    nameSpace: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },
    editData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions('skill', [AC_SAVE_DATA]),
    clickButton() {
      this[AC_SAVE_DATA]();
      this.$router.push({ name: 'root' });
    },
  },
};
</script>
