<template lang="pug">
  ValidationProvider(
    v-slot="{ errors }"
    tag="div"
    :rules="vValidate"
    :name="name"
  )
    input(
      class="atInputText"
      type="text"
      v-model="inputValue"
      :name="name"
      :placeholder="placeholder"
      @input="inputText"
    )
    span {{ errors[0] }}
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    vValidate: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    inputText(e) {
      this.$emit('input-text', e.target.value);
    },
  },
};
</script>
