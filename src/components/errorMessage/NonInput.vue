<template>
  <p class="m-text-errorMessage">
    {{text}}を記入してください
  </p>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
