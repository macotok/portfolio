<template>
  <div class="m-button-01">
    <router-link :to="{name: linkTo}" class="m-button-01-link">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
