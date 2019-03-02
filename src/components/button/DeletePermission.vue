<template>
  <div class="m-button-03">
    <button @click="deleteId" type="button" class="m-button-03-link">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    eventName: String,
  },
  methods: {
    deleteId() {
      this.$emit(this.eventName);
    },
  },
};
</script>
