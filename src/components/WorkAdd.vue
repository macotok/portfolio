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
      <tr>
        <th>
          <label>タイトル</label>
        </th>
        <td>
          <input v-model="work.title">
        </td>
      </tr>
      <tr>
        <th>
          <label>タグ</label>
        </th>
        <td>
          <input v-model="work.tags" placeholder="カンマ区切りで指定">
        </td>
      </tr>
      <tr>
        <th>
          <label>画像</label>
        </th>
        <td>
          <input type="file" @change="onFileChange">
          <img v-show="work.image_path" :src="work.image_path">
          <p v-if="errorMessage">
            {{errorMessage}}
          </p>
        </td>
      </tr>
      <tr>
        <th>
          <label>url</label>
        </th>
        <td>
          <input v-model="work.url">
        </td>
      </tr>
      <tr>
        <th>
          <label>内容</label>
        </th>
        <td>
          <textarea v-model="work.text" rows="10"></textarea>
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
  data() {
    return {
      work: {
        title: '',
        text: '',
        tags: '',
        image_path: '',
        url: '',
      },
      errorMessage: false,
    };
  },
  computed: {
    tagsList() {
      const tags = this.work.tags;
      return tags.trim() ? tags.replace(/\s+/g, '').split(',') : [];
    },
  },
  methods: {
    onFileChange(e) {
      this.createImage(e.target.files[0]);
    },
    createImage(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.work.image_path = e.target.result;
      };
      reader.onerror = () => {
        this.errorMessage = '読み込みに失敗しました';
        reader.abort();
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    save() {
      const data = Object.assign({}, this.work, { tags: this.tagsList });
      this.$emit('workAdd', data);
    },
  },
};
</script>
