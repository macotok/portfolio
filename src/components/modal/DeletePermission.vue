<style scoped lang="scss">
  .modalBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 100px 50px;
    box-sizing: border-box;
    flex-wrap: wrap;
    .title {
      text-align: center;
      font-size: 110%;
      width: 100%;
    }
  }
</style>

<template>
  <modal
    name="hello-world"
    width="80%"
    height="80%"
  >
    <div class="modalBlock">
      <p class="title">{{type}}「{{deleteTitle}}」を削除しますか？</p>
      <div class="m-buttonBlock-02">
        <close-modal-button
          text="閉じる"
          eventName="closeModal"
          @closeModal="closeModal"
        >
        </close-modal-button>
        <delete-permission-button
          text="削除する"
          eventName="deleteId"
          @deleteId="deleteId"
        >
        </delete-permission-button>
      </div>
    </div>
  </modal>
</template>

<script>
import CloseModalButton from '../button/CloseModalButton';
import DeletePermissionButton from '../button/DeletePermissionButton';

export default {
  props: {
    deleteTitle: String,
    type: String,
  },
  methods: {
    closeModal() {
      this.$modal.hide('hello-world');
    },
    deleteId() {
      this.$modal.hide('hello-world');
    },
  },
  components: {
    CloseModalButton,
    DeletePermissionButton,
  },
};
</script>
