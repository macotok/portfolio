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
    <div v-if="!validate">
      <div class="m-box-errorMessage">
        <p class="m-text-errorMessage">{{nonInputMessage}}</p>
      </div>
    </div>
    <table class="m-table-01">
      <tr>
        <th>
          タイトル
        </th>
        <td>
          <input-text
            name="workTitle"
            :model="addNewWork.title"
            placeholder=""
            eventName="workTitle"
            @workTitle="title"
          >
          </input-text>
          <div v-if="inputCheck.indexOf('title') >= 0">
            <non-input
              text="タイトル"
            >
            </non-input>
          </div>
        </td>
      </tr>
      <tr>
        <th>
          タグ
        </th>
        <td>
          <input-text
            name="workTags"
            :model="addNewWork.tags"
            placeholder="カンマ区切りで指定"
            eventName="workTags"
            @workTags="tags"
          >
          </input-text>
          <div v-if="inputCheck.indexOf('tags') >= 0">
            <non-input
              text="タグ"
            >
            </non-input>
          </div>
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
            :model="addNewWork.image_path"
            eventName="workImage"
            @workImage="image"
          >
          </input-file>
          <div v-if="inputCheck.indexOf('image_path') >= 0">
            <non-select
              text="画像"
            >
            </non-select>
          </div>
        </td>
      </tr>
      <tr>
        <th>
          URL
        </th>
        <td>
          <input-text
            name="workUrl"
            :model="addNewWork.url"
            placeholder=""
            eventName="workUrl"
            @workUrl="url"
          >
          </input-text>
          <div v-if="inputCheck.indexOf('url') >= 0">
            <non-input
              text="URL"
            >
            </non-input>
          </div>
        </td>
      </tr>
      <tr>
        <th>
          内容
        </th>
        <td>
          <input-text-area
            name="workText"
            :model="addNewWork.text"
            placeholder=""
            eventName="workText"
            rows="10"
            @workText="text"
          >
          </input-text-area>
          <div v-if="inputCheck.indexOf('text') >= 0">
            <non-input
              text="内容"
            >
            </non-input>
          </div>
        </td>
      </tr>
    </table>
    <submit-button
      eventName="addWork"
      @addWork="save"
    >
      追加
    </submit-button>
  </div>
</template>

<script>
import InputText from '@/components/form/InputText';
import InputTextArea from '@/components/form/InputTextArea';
import InputFile from '@/components/form/InputFile';
import SubmitButton from '@/components/button/Submit';
import NonInput from '@/components/errorMessage/NonInput';
import NonSelect from '@/components/errorMessage/NonSelect';
import NonInputValidate from '@/utils/NonInputValidate';
import { NON_INPUT_MESSAGE } from '@/defines/';

export default {
  data() {
    return {
      validate: true,
    };
  },
  computed: {
    addNewWork() {
      return this.$store.state.addNewWork;
    },
    inputCheck() {
      const nonInputValidate = new NonInputValidate(this.$store.state.addNewWork);
      return nonInputValidate.inputCheck();
    },
    nonInputMessage() {
      return NON_INPUT_MESSAGE;
    },
  },
  methods: {
    title(value) {
      this.$store.commit('addWorkData', { title: value });
    },
    tags(value) {
      const data = { tags: value.trim() ? value.replace(/\s+/g, '').split(',') : [] };
      this.$store.commit('addWorkData', data);
    },
    url(value) {
      this.$store.commit('addWorkData', { url: value });
    },
    image(value, fileName) {
      this.$store.commit('addWorkData', { image_path: value, image_name: fileName });
    },
    text(value) {
      this.$store.commit('addWorkData', { text: value });
    },
    save() {
      if (this.inputCheck.length) {
        this.validate = false;
        window.scrollTo(0, 0);
      } else {
        this.$store.commit('addWork', this.$store.state.addNewWork);
        this.$router.push({ name: 'root' });
      }
    },
  },
  components: {
    InputText,
    InputTextArea,
    InputFile,
    SubmitButton,
    NonInput,
    NonSelect,
  },
};
</script>
