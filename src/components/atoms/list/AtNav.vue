<template lang="pug">
  li.atNav
    router-link.atNav-link(
      :to="{name: 'root'}", exact
    )
      slot
</template>

<style lang="scss">
  .atNav {
    &-link {
      text-decoration: none;
      display: block;
      padding: 15px 30px;
      background-color: $gray-color-01;
      &:hover {
        color: $white-color;
        background-color: $key-color;
      }
      &.router-link-active {
        text-decoration: none;
        pointer-events: none;
        color: $white-color;
        background-color: $key-color;
      }
    }
  }
</style>
