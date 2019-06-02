<template lang="pug">
  form
    table
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
</template>

<script>
import MoInputFile from '@/components/molecules/MoInputFile';
import MoInputText from '@/components/molecules/MoInputText';
import MoInputTextArea from '@/components/molecules/MoInputTextArea';

export default {
  components: {
    MoInputFile,
    MoInputText,
    MoInputTextArea,
  },
};
</script>
