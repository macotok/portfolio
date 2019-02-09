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
        <p class="m-text-errorMessage">未入力箇所があります</p>
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
            :model="editWork.title"
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
            :model="editWork.tags"
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
            :model="editWork.image_path"
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
            :model="editWork.url"
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
            :model="editWork.text"
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
      text="保存"
      @addWork="save"
    >
    </submit-button>
  </div>
</template>

<script>
import InputText from '../form/InputText';
import InputTextArea from '../form/InputTextArea';
import InputFile from '../form/InputFile';
import SubmitButton from '../button/SubmitButton';
import NonInput from '../errorMessage/NonInput';
import NonSelect from '../errorMessage/NonSelect';
import NonInputValidate from '../../utils/NonInputValidate';

export default {
  data() {
    return {
      validate: true,
    };
  },
  computed: {
    editWork() {
      const workList = this.$store.state.works;
      const editWork = workList.find(w => (
        w.id === parseInt(this.$route.params.id, 10)
      ));
      return editWork;
    },
    inputCheck() {
      const workList = this.$store.state.works;
      const editWork = workList.find(w => (
        w.id === parseInt(this.$route.params.id, 10)
      ));
      const nonInputValidate = new NonInputValidate(editWork);
      return nonInputValidate.inputCheck();
    },
  },
  methods: {
    title(value) {
      this.$store.commit('updateWorkData', { title: value, id: parseInt(this.$route.params.id, 10) });
    },
    tags(value) {
      const data = { tags: value.trim() ? value.replace(/\s+/g, '').split(',') : [] };
      this.$store.commit('updateWorkData', { data, id: parseInt(this.$route.params.id, 10) });
    },
    url(value) {
      this.$store.commit('updateWorkData', { url: value, id: parseInt(this.$route.params.id, 10) });
    },
    image(value) {
      this.$store.commit('updateWorkData', { image_path: value, id: parseInt(this.$route.params.id, 10) });
    },
    text(value) {
      this.$store.commit('updateWorkData', { text: value, id: parseInt(this.$route.params.id, 10) });
    },
    save() {
      if (this.inputCheck.length) {
        this.validate = false;
        window.scrollTo(0, 0);
      } else {
        this.$store.commit('updateWork', this.$store.state.editWork);
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
