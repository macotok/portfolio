<template lang="pug">
  tr
    th
      at-label
        slot
    td
      at-field(
        :actionType="actionType"
        :name="name"
      )
        at-text-area(
          :name="name"
          :placeholder="placeholder"
          slot-scope="{inputData}"
          @input-text="inputData"
        )
</template>

<script>
import AtField from '@/components/atoms/form/AtField';
import AtLabel from '@/components/atoms/form/AtLabel';
import AtTextArea from '@/components/atoms/form/AtTextArea';

export default {
  components: {
    AtField,
    AtLabel,
    AtTextArea,
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
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>
