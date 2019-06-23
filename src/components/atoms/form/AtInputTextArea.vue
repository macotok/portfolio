<template lang="pug">
  ValidationProvider(
    v-slot="{ errors }"
    tag="div"
    :rules="vValidate"
    :name="name"
  )
    textarea.atInputTextArea(
      v-model="inputValue"
      :name="name"
      :rows="rows"
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
    rows: {
      type: Number,
      default: 10,
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
