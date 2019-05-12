<template lang="pug">
  div
    or-header(
      :title="pageTitle"
    )
    at-title-h2 {{ title[0] }}
    or-form(
      :label01="label01"
      :label02="label02"
    )
    at-title-h2 {{ title[1] }}
    at-title-h2 {{ title[2] }}
    at-title-h2 {{ title[3] }}
</template>

<script>
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrForm from '@/components/organisms/OrForm';
import OrHeader from '@/components/organisms/OrHeader';

export default {
  components: {
    AtTitleH2,
    OrForm,
    OrHeader,
  },
  props: {
    label01: {
      type: String,
      required: true,
    },
    label02: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
    title: {
      type: Array,
      required: true,
    },
  },
};
</script>
