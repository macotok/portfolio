<template>
  <p class="m-text-errorMessage">
    {{text}}を選択してください
  </p>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
