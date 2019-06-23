<template lang="pug">
  div.atInputFile
     ValidationProvider(
      v-slot="{ validate, errors }"
      tag="div"
      :rules="vValidate"
      :name="name"
    )
      label.atInputFile-label(
        :for="labelName"
      )
        slot 選択
        input.atInputFile-input(
          type="file"
          :id="labelName"
          :name="name"
          @change="inputFile || validate(inputValue)"
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
    labelName: {
      type: String,
      default: 'file',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
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
    inputFile(e) {
      this.createImage(e.target.files[0], e.target.files[0].name);
    },
    createImage(file, fileName) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.$emit('input-file', {
          path: e.target.result,
          name: fileName,
        });
      };
      reader.onerror = () => {
        reader.abort();
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
