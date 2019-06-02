<template lang="pug">
  te-add(
    nameSpace="work"
    :actionType="AC_UPDATE_WORK"
  )
</template>

<script>
import TeAdd from '@/components/templates/Work/TeAdd';
import { AC_UPDATE_WORK } from '@/store/work/actions';

export default {
  components: {
    TeAdd,
  },
  computed: {
    AC_UPDATE_WORK() {
      return AC_UPDATE_WORK;
    },
  },
};
</script>
