<template>
  <div class="m-button-01">
    <button @click="save" type="submit" class="m-button-01-link">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    eventName: String,
    text: String,
  },
  methods: {
    save() {
      this.$emit(this.eventName);
    },
  },
};
</script>
