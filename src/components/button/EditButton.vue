<style scoped lang="scss">
  .m-button-02 {
    margin-top: 1rem;
  }
</style>

<template>
  <div class="m-button-02">
    <router-link :to="`/${type}/${editId}/edit`">
      <button type="button" class="m-button-02-link">{{text}}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    editId: [String, Number],
    text: String,
    type: String,
  },
};
</script>
