<template lang="pug">
  .atTitleH1
    h1.atTitleH1-title
      slot
</template>

<style lang="scss">
  .atTitleH1 {
    &-title {
     letter-spacing: 10px;
     font-weight: normal;
     font-size: 1.4rem;
    }
  }
</style>
