<template lang="pug">
  div.moDrawerMenu
    at-modal(
      :modalName="modalName"
      :width="width"
      :height="height"
    )
      div.moDrawerMenu-inner
        slot
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
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
};
</script>
