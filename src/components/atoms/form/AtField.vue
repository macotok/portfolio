<template lang="pug">
  div
    slot(
      :inputData="inputData"
    )
</template>

<script>
export default {
  props: {
    nameSpace: {
      type: String,
      default: '',
    },
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
    inputData(value) {
      return this.$store.dispatch(`${this.nameSpace}/${this.actionType}`, {
        name: this.name,
        value,
      });
    },
  },
};
</script>
