<template lang="pug">
  tr
    th
      at-label
        slot
    td
      at-field(
        :nameSpace="nameSpace"
        :actionType="actionType"
        :name="name"
      )
        at-input-text(
          slot-scope="{inputData}"
          :name="name"
          :value="value"
          :placeholder="placeholder"
          @input-text="inputData"
        )
</template>

<script>
import AtField from '@/components/atoms/form/AtField';
import AtLabel from '@/components/atoms/form/AtLabel';
import AtInputText from '@/components/atoms/form/AtInputText';

export default {
  components: {
    AtField,
    AtLabel,
    AtInputText,
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
    nameSpace: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },
  },
};
</script>
