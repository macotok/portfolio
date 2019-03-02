<template lang="pug">
  div.m-button-02
    router-link(:to="`/${type}/${editId}/edit`")
      button.m-button-02-link(type="button")
        slot
</template>

<script>
export default {
  props: {
    editId: [String, Number],
    type: String,
  },
};
</script>
