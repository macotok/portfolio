<template lang="pug">
  te-add(
    nameSpace="work"
    :actionType="AC_UPDATE_INPUT_WORK"
  )
</template>

<script>
import TeAdd from '@/components/templates/Work/TeAdd';
import { AC_UPDATE_INPUT_WORK } from '@/store/work/actions/updateInput';

export default {
  components: {
    TeAdd,
  },
  computed: {
    AC_UPDATE_INPUT_WORK: () => AC_UPDATE_INPUT_WORK,
  },
};
</script>
