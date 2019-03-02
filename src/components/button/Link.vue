<template>
  <div class="m-button-01">
    <a :href="linkTo" class="m-button-01-link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
