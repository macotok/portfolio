<template lang="pug">
  div.atButton
    router-link.atButton-link(
      :to="{name: linkTo}"
    )
      slot
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .atButton {
    display: flex;
    justify-content: flex-end;
    &-link {
      display: inline-block;
      text-decoration: none;
      background-color: #1c93fa;
      color: #f6f9ff;
      padding: 10px 25px;
      text-align: center;
      border-radius: 3px;
      font-size: .9rem;
      transition: .1s ease-in-out;
      border: 1px solid #1c93fa;
      &:hover {
        background-color: #f6f9ff;
        color: #1c93fa;
      }
    }
  }
</style>
