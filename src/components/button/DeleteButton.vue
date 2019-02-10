<template>
  <div class="m-button-03">
    <button @click="openModal" type="button" class="m-button-03-link">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    eventName: String,
    text: String,
  },
  methods: {
    openModal() {
      this.$emit(this.eventName);
    },
  },
};
</script>
