<template>
  <div>
    <div v-if="work">
      <label>ID:</label>
      <input v-model="work.id" disabled>
    </div>
    <div>
      <label>タイトル:</label>
      <input v-mode="work.title">
    </div>
    <div>
      <label>内容:</label>
      <textarea v-model="work.text"></textarea>
    </div>
    <div>
      <label>タグ:</label>
      <input v-model="work.tags" placeholder="カンマ区切りで指定">
    </div>
    <div>
      <label>画像のpath</label>
      <input v-model="work.image_path">
    </div>
    <div>
      <label>url</label>
      <input v-model="work.url">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      work: {
        title: '',
        text: '',
        tags: '',
        image_path: '',
        url: '',
      },
    };
  },
};
</script>
