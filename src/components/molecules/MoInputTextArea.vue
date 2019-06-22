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
        at-input-text-area(
          :name="name"
          :value="value"
          :placeholder="placeholder"
          slot-scope="{inputData}"
          @input-text="inputData"
        )
</template>

<script>
import AtField from '@/components/atoms/form/AtField';
import AtLabel from '@/components/atoms/form/AtLabel';
import AtInputTextArea from '@/components/atoms/form/AtInputTextArea';

export default {
  components: {
    AtField,
    AtLabel,
    AtInputTextArea,
  },
  props: {
    actionType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    nameSpace: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>
