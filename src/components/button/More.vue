<template lang="pug">
  div.m-button-01
    router-link.m-button-01-link(:to="{name: linkTo}")
      slot
</template>

<script>
export default {
  props: {
    linkTo: String,
  },
};
</script>
