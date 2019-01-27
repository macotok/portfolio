<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
  .workEditor {
    table {
      width: 100%;
      th {
        text-align: left;
        width: 15%;
      }
      td {
        input,
        textarea {
          font-size: 110%;
          width: 100%;
          padding: 10px;
          border: 1px solid $gray-color-03;
          resize: none;
          box-sizing: border-box;
          &:disabled {
            border: none;
          }
        }
      }
    }
    .m-button-01 {
      margin-top: 25px;
    }
  }
</style>

<template>
  <div class="workEditor">
    <table class="m-table-01">
      <tr v-if="work">
        <th>
          <label>ID</label>
        </th>
        <td>
          <input v-model="input.id" disabled>
        </td>
      </tr>
      <tr>
        <th>
          <label>タイトル</label>
        </th>
        <td>
          <input v-model="input.title">
        </td>
      </tr>
      <tr>
        <th>
          <label>タグ</label>
        </th>
        <td>
          <input v-model="input.tags" placeholder="カンマ区切りで指定">
        </td>
      </tr>
      <tr>
        <th>
          <label>画像のpath</label>
        </th>
        <td>
          <input v-model="input.image_path">
        </td>
      </tr>
      <tr>
        <th>
          <label>url</label>
        </th>
        <td>
          <input v-model="input.url">
        </td>
      </tr>
      <tr>
        <th>
          <label>内容</label>
        </th>
        <td>
          <textarea v-model="input.text" rows="10"></textarea>
        </td>
      </tr>
    </table>
    <div class="m-button-01">
      <button @click="save" type="submit" class="m-button-01-link">追加</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    work: Object,
  },
  data() {
    return {
      input: {
        title: '',
        text: '',
        tags: '',
        image_path: '',
        url: '',
      },
    };
  },
  computed: {
    tagsList() {
      const tags = this.input.tags;
      return tags.trim() ? tags.replace(/\s+/g, '').split(',') : [];
    },
  },
  methods: {
    save() {
      const data = Object.assign({}, this.input, { tags: this.tagsList });
      this.$emit('workAdd', data);
    },
  },
};
</script>
