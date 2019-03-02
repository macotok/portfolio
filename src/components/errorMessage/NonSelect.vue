<template lang="pug">
  p.m-text-errorMessage
    | {{text}}を選択してください
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
