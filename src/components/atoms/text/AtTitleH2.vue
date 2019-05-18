<template lang="pug">
  .atTitleH2
    h2.atTitleH2-title
      slot
</template>

<style lang="scss">
  .atTitleH2 {
    position: relative;
    margin-bottom: 1rem;
    &::before {
      content: '';
      width: 3%;
      position: absolute;
      display: block;
      height: 2px;
      background: $key-color;
      left: 0;
      top: 50%;
      margin: -1px 0 0 0;
    }
    &-title {
      background-color: $white-color;
      position: relative;
      margin-left: 4%;
      font-size: 1.2rem;
    }
  }
</style>
