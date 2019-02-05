<style scoped lang="scss">
  table {
    width: 100%;
    th {
      text-align: left;
      width: 15%;
    }
  }
</style>

<template>
  <div>
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
      eventName="addWork"
      text="追加"
      @addWork="save"
    >
    </submit-button>
  </div>
</template>

<script>
import InputText from '../form/InputText';
import InputTextarea from '../form/InputTextarea';
import InputFile from '../form/InputFile';
import SubmitButton from '../button/SubmitButton';

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
  computed: {
    validationCheck() {
      const inputData = this.$store.state.addNewWork;
      const inputList = Object.keys(inputData).map(key => ({ [key]: inputData[key] }));
      return inputList;
    },
  },
  methods: {
    title(value) {
      const data = { title: value };
      this.$store.commit('addWorkData', data);
    },
    tags(value) {
      const tagList = value.trim() ? value.replace(/\s+/g, '').split(',') : [];
      const data = { tags: tagList };
      this.$store.commit('addWorkData', data);
    },
    url(value) {
      const data = { url: value };
      this.$store.commit('addWorkData', data);
    },
    image(value) {
      const data = { image_path: value };
      this.$store.commit('addWorkData', data);
    },
    text(value) {
      const data = { text: value };
      this.$store.commit('addWorkData', data);
    },
    save() {
      this.validationCheck();
      this.$store.commit('addWork', this.$store.state.addNewWork);
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
