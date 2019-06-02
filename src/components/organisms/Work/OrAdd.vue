<template lang="pug">
  form.workOrAdd
    table.workOrAdd-table
      MoInputText(
        actionType="action01"
        name="title"
      ) タイトル
      MoInputText(
        placeholder="カンマ区切りで指定"
        actionType="action01"
        name="tags"
      ) タグ
      MoInputFile(
        actionType="action01"
        name="file"
      ) 画像
      MoInputText(
        actionType="action01"
        name="url"
      ) URL
      MoInputTextArea(
        actionType="action01"
        name="text"
      ) 内容
    at-submit(
      @click-button="clickButton"
    ) 追加
</template>

<script>
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
  methods: {
    clickButton() {
      console.log('click');
    },
  },
};
</script>
