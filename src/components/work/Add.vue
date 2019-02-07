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
            :model="addNewWork.title"
            placeholder=""
            eventName="workTitle"
            @workTitle="title"
          >
          </input-text>
          <div v-if="checkList.title">
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
          <div v-if="checkList.tags">
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
          <div v-if="checkList.image_path">
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
          <div v-if="checkList.url">
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
          <div v-if="checkList.text">
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
      text="追加"
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

export default {
  data() {
    return {
      checkList: {
        title: false,
        text: false,
        tags: false,
        image_path: false,
        url: false,
      },
      validate: true,
    };
  },
  computed: {
    addNewWork() {
      return this.$store.state.addNewWork;
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
      const inputData = this.$store.state.addNewWork;
      this.validate = true;
      Object.keys(inputData).map((key) => {
        this.checkList[key] = false;
        if (!inputData[key]) {
          Object.keys(this.checkList).find((c) => {
            if (c === key) {
              this.checkList[c] = true;
            }
          });
          this.validate = false;
        }
      });
      if (this.validate) {
        this.$store.commit('addWork', this.$store.state.addNewWork);
        this.$router.push({ name: 'root' });
      } else {
        window.scrollTo(0, 0);
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
