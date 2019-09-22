<template lang="pug">
  div.moConfirmModal
    at-modal(
      :modalName="modalName"
    )
      div.moConfirmModal-inner
        p.moConfirmModal-text {{ confirmText }}
        mo-two-event-button(
          classNameLeft="atButtonLeft"
          classNameRight="atButtonRight"
          @click-button-left="clickCancel"
          @click-button-right="clickAction"
          :styles="styles.moTwoEventButton"
        )
          template(v-slot:first) 閉じる
          template(v-slot:second) 決定
</template>

<script>
import AtModal from '@/components/atoms/modal/AtModal';
import MoTwoEventButton from '@/components/molecules/button/MoTwoEventButton';

export default {
  components: {
    AtModal,
    MoTwoEventButton,
  },
  props: {
    modalName: {
      type: String,
      required: true,
    },
    confirmText: {
      type: String,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        moTwoEventButton: {
          justifyContent: 'center',
        },
      };
    },
  },
  methods: {
    clickCancel() {
      this.$modal.hide(this.modalName);
    },
    clickAction() {
      this.$emit('click-action');
    },
  },
};
</script>
