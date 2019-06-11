<template lang="pug">
  div.moConfirmModal
    at-modal(
      :modalName="modalName"
    )
</template>

<script>
import AtModal from '@/components/atoms/modal/AtModal';

export default {
  components: {
    AtModal,
  },
  props: {
    modalName: {
      type: String,
      required: true,
    },
  },
};
</script>
