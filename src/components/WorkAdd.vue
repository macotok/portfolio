<style scoped lang="scss">
  .workEditor {
    table {
      width: 100%;
      th {
        text-align: left;
        width: 15%;
      }
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
          <input-file
            labelName="選択"
            thumnailSize="250"
            name="workImage"
            :model="work.image_path"
            eventName="workImage"
            @workImage="image"
          >
          </input-file>
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
    <submit-button
      eventName="workAdd"
      text="追加"
      @workAdd="save"
    >
    </submit-button>
  </div>
</template>

<script>
import InputText from './form/InputText';
import InputTextarea from './form/InputTextarea';
import InputFile from './form/InputFile';
import SubmitButton from './button/SubmitButton';

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
    };
  },
  methods: {
    title(value) {
      this.$store.commit('workTitle', value);
    },
    tags(value) {
      this.$store.commit('workTags', value);
    },
    url(value) {
      this.$store.commit('workUrl', value);
    },
    image(value) {
      this.$store.commit('workImage', value);
    },
    text(value) {
      this.$store.commit('workText', value);
    },
    save() {
      this.$store.commit('addWork', this.$store.state.addWork);
      this.$router.push({ name: 'root' });
    },
  },
  components: {
    InputText,
    InputTextarea,
    InputFile,
    SubmitButton,
  },
};
</script>
