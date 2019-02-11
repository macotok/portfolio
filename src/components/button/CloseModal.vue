<template>
  <div class="m-button-04">
    <button @click="close" type="button" class="m-button-04-link">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    eventName: String,
  },
  methods: {
    close() {
      this.$emit(this.eventName);
    },
  },
};
</script>
