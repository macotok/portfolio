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
        at-input-file(
          :name="name"
          slot-scope="{inputData}"
          @input-file="inputData"
        )
</template>

<script>
import AtField from '@/components/atoms/form/AtField';
import AtLabel from '@/components/atoms/form/AtLabel';
import AtInputFile from '@/components/atoms/form/AtInputFile';

export default {
  components: {
    AtField,
    AtLabel,
    AtInputFile,
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
    nameSpace: {
      type: String,
      required: true,
    },
  },
};
</script>
