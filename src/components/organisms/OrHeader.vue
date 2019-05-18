<template lang="pug">
  header.or-header
    at-title-h1
      slot
</template>

<script>
import AtTitleH1 from '@/components/atoms/text/AtTitleH1';

export default {
  components: {
    AtTitleH1,
  },
};
</script>

<style lang="scss">
  .or-header {
    text-align: center;
    padding: 20px 0;
    background-color: $gray-color-04;
    position: relative;
  }
</style>
