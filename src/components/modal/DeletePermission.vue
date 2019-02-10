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
    name="deletePermission"
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
          @deleteId="deletedId"
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
    deleteId: [String, Number],
    commitName: String,
  },
  methods: {
    closeModal() {
      this.$modal.hide('deletePermission');
    },
    deletedId() {
      this.$store.commit(this.commitName, this.deleteId);
      this.$modal.hide('deletePermission');
      this.$router.push({ name: 'root' });
    },
  },
  components: {
    CloseModalButton,
    DeletePermissionButton,
  },
};
</script>
