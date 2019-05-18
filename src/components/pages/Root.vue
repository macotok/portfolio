<template lang="pug">
  te-root(
    :label01="label01"
    :label02="label02"
  )
</template>

<script>
import { mapState } from 'vuex';
import TeRoot from '@/components/templates/TeRoot';

export default {
  components: {
    TeRoot,
  },
  computed: {
    ...mapState({
      label01(state) {
        return state.label01;
      },
      label02(state) {
        return state.label02;
      },
    }),
  },
};
</script>
