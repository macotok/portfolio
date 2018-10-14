<style scoped lang="scss">
  .aboutBlock {
    margin-bottom: 2.5%;
  }
</style>

<template>
  <div v-if="page === 'top'" class="aboutBlock">
    <p>
      簡単な経歴を紹介します。<br>
      ちなみにこのサイトはViewは「Vue.js」。Serverは「Firebase」で作りました。(※レスポンシブ対応してません。)
    </p>
  </div>
</template>

<script>
export default {
  props: {
    page: String,
  },
};
</script>
