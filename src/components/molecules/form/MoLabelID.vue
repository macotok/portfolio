<template lang="pug">
  tr
    th
      at-label ID
    td {{ numberID }}
</template>

<script>
import AtLabel from '@/components/atoms/form/AtLabel';

export default {
  components: {
    AtLabel,
  },
  props: {
    numberID: {
      type: [Number, String],
      default: '',
    },
  },
};
</script>
