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
import MoInputText from '@/components/molecules/MoInputText';
import MoInputTextArea from '@/components/molecules/MoInputTextArea';

export default {
  components: {
    MoInputText,
    MoInputTextArea,
  },
};
</script>
