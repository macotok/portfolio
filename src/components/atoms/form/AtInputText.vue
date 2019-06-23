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
    at-text(
      :styles="styles.errorMessage"
    ) {{ errors[0] }}
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import AtText from '@/components/atoms/text/AtText';

export default {
  components: {
    ValidationProvider,
    AtText,
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
  computed: {
    styles() {
      return {
        errorMessage: {
          marginTop: '0.5rem',
          color: '#B31F57',
        },
      };
    },
  },
  methods: {
    inputText(e) {
      this.$emit('input-text', e.target.value);
    },
  },
};
</script>
