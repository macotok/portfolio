<template lang="pug">
  div.workOrAdd
    table.workOrAdd-table
      MoInputText(
        name="title"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) タイトル
      MoInputText(
        name="tags"
        placeholder="カンマ区切りで指定"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) タグ
      MoInputFile(
        name="image_name"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) 画像
      MoInputText(
        name="url"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) URL
      MoInputTextArea(
        name="text"
        :nameSpace="nameSpace"
        :actionType="actionType"
      ) 内容
    at-submit(
      @click-button="clickButton"
    ) 追加
</template>

<script>
import { mapActions } from 'vuex';
import { AC_SAVE_WORK } from '@/store/work/actions';
import AtSubmit from '@/components/atoms/form/AtSubmit';
import MoInputFile from '@/components/molecules/MoInputFile';
import MoInputText from '@/components/molecules/MoInputText';
import MoInputTextArea from '@/components/molecules/MoInputTextArea';

export default {
  components: {
    AtSubmit,
    MoInputFile,
    MoInputText,
    MoInputTextArea,
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
  },
  methods: {
    ...mapActions('work', [AC_SAVE_WORK]),
    clickButton() {
      this[AC_SAVE_WORK]();
    },
  },
};
</script>
