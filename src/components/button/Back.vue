<template>
  <div class="m-button-04">
    <router-link :to="linkTo">
      <button type="button" class="m-button-04-link">
        <slot></slot>
      </button>
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
