<template lang="pug">
  te-add(
    nameSpace="work"
    :actionType="AC_INPUT_UPDATE_WORK"
  )
</template>

<script>
import TeAdd from '@/components/templates/Work/TeAdd';
import { AC_INPUT_UPDATE_WORK } from '@/store/work/actions/inputUpdate';

export default {
  components: {
    TeAdd,
  },
  computed: {
    AC_INPUT_UPDATE_WORK: () => AC_INPUT_UPDATE_WORK,
  },
};
</script>
