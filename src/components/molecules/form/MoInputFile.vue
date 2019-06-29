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
        mo-input-file-preview(
          slot-scope="{inputData}"
          :name="name"
          :nameSpace="nameSpace"
          :src="src"
          @input-file="inputData"
        )
</template>

<script>
import AtField from '@/components/atoms/form/AtField';
import AtLabel from '@/components/atoms/form/AtLabel';
import MoInputFilePreview from '@/components/molecules/form/MoInputFilePreview';

export default {
  components: {
    AtField,
    AtLabel,
    MoInputFilePreview,
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
    src: {
      type: String,
      default: '',
    },
  },
};
</script>
