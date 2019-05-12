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
        at-text-input(
          :name="name"
          slot-scope="{inputText}"
          @input-text="inputText"
        )
</template>

<script>
import AtField from '@/components/atoms/form/AtField';
import AtLabel from '@/components/atoms/form/AtLabel';
import AtTextInput from '@/components/atoms/form/AtTextInput';

export default {
  components: {
    AtField,
    AtLabel,
    AtTextInput,
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
  },
};
</script>
