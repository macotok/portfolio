<template lang="pug">
  nl2br(
    tag="p"
    :text="text"
  )
</template>

<script>
import Nl2br from 'vue-nl2br';

export default {
  components: {
    Nl2br,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
