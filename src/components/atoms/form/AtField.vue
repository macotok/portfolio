<template lang="pug">
  div
    slot(
      :inputData="inputData"
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
    inputData(e) {
      return this.$store.dispatch(this.actionType, {
        name: this.name,
        value: e.target.value,
      });
    },
  },
};
</script>
