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
        input {
          font-size: 110%;
          width: 100%;
          padding: 10px;
          border: 1px solid $gray-color-03;
          resize: none;
          box-sizing: border-box;
          &.fileInput {
            border: none;
            display: none;
          }
        }
        .file {
          color: $white-color;
          background-color: $sub-color;
          border-radius: $border-radius;
          padding: $borderPadding;
          display: inline-block;
          &:hover {
            cursor: pointer;
          }
        }
        .fileThumnail {
          display: block;
          margin-top: 10px;
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
          タイトル
        </th>
        <td>
          <input-text
            name="workTitle"
            :model="work.title"
            placeholder=""
            eventName="workTitle"
            @workTitle="title"
          >
          </input-text>
        </td>
      </tr>
      <tr>
        <th>
          タグ
        </th>
        <td>
          <input-text
            name="workTags"
            :model="work.tags"
            placeholder="カンマ区切りで指定"
            eventName="workTags"
            @workTags="tags"
          >
          </input-text>
        </td>
      </tr>
      <tr>
        <th>
          画像
        </th>
        <td>
          <label class="file">
            選択
            <input class="fileInput" type="file" @change="onFileChange">
          </label>
          <img v-show="work.image_path" class="fileThumnail" :src="work.image_path" width="250">
          <p v-if="errorMessage">
            {{errorMessage}}
          </p>
        </td>
      </tr>
      <tr>
        <th>
          url
        </th>
        <td>
          <input-text
            name="workUrl"
            :model="work.url"
            placeholder=""
            eventName="workUrl"
            @workUrl="url"
          >
          </input-text>
        </td>
      </tr>
      <tr>
        <th>
          内容
        </th>
        <td>
          <input-textarea
            name="workText"
            :model="work.text"
            placeholder=""
            eventName="workText"
            rows="10"
            @workText="text"
          >
          </input-textarea>
        </td>
      </tr>
    </table>
    <div class="m-button-01">
      <button @click="save" type="submit" class="m-button-01-link">追加</button>
    </div>
  </div>
</template>

<script>
import InputText from './form/InputText';
import InputTextarea from './form/InputTextarea';

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
    title(value) {
      this.$store.commit('workTitle', value);
    },
    tags(value) {
      this.$store.commit('workTags', value);
    },
    url(value) {
      this.$store.commit('workUrl', value);
    },
    text(value) {
      this.$store.commit('workText', value);
    },
    save() {
      const data = Object.assign({}, this.work);
      this.$emit('workAdd', data);
    },
  },
  components: {
    InputText,
    InputTextarea,
  },
};
</script>
