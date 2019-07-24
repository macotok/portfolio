<template lang="pug">
  div.moMessageBoard
    at-text(
      :styles="styles.textColor"
    )
      slot
</template>

<script>
import AtText from '@/components/atoms/text/AtText';

export default {
  components: {
    AtText,
  },
  props: {
    styles: {
      type: Object,
      default: null,
    },
  },
};
</script>
