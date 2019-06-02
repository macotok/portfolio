<template lang="pug">
  div
    slot(
      :inputText="inputText"
    )
</template>

<script>
export default {
  props: {
    actionType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    inputText(e) {
      return this.$store.dispatch(this.actionType, {
        name: this.name,
        value: e.target.value,
      });
    },
  },
};
</script>
