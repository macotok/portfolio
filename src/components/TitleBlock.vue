<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
  .title {
    position: relative;
    margin-bottom: 2.5%;
    &:before {
      content: "";
      width: 3%;
      position: absolute;
      display: block;
      height: 2px;
      background: $key-color;
      left: 0;
      top: 50%;
      margin: -1px 0 0 0;
    }
    h2 {
      background-color: #fff;
      position: relative;
      margin-left: 4%;
      font-size: 1.2rem;
    }
  }
</style>

<template>
  <div class="title">
    <h2>
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {};
</script>
