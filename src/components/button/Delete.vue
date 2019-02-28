<template>
  <div class="m-button-03">
    <button
      @click="openModal"
      type="button"
      class="m-button-03-link"
      :data-id="id"
      :data-title="title"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    eventName: String,
    id: Number,
    title: String,
  },
  methods: {
    openModal(e) {
      this.$emit(this.eventName, e.target);
    },
  },
};
</script>
