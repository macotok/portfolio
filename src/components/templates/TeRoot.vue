<template lang="pug">
  div
    or-header Portfolio
    at-title-h2 Work
    or-form(
      :label01="label01"
      :label02="label02"
    )
    at-title-h2 Skill
    at-title-h2 Profile
    at-title-h2 About this Portfolio
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
  },
};
</script>
