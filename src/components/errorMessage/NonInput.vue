<template lang="pug">
  p.m-text-errorMessage
    | {{text}}を記入してください
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
