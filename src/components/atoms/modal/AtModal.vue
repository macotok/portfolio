<template lang="pug">
  modal(
    :name="modalName"
    :width="width"
    :height="height"
  )
    slot
</template>

<script>
export default {
  props: {
    modalName: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: '80%',
    },
    height: {
      type: [String, Number],
      default: '80%',
    },
  },
};
</script>

<style scoped lang="scss">
  .modalBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 100px 50px;
    box-sizing: border-box;
    flex-wrap: wrap;
    .title {
      text-align: center;
      font-size: 110%;
      width: 100%;
    }
  }
</style>
