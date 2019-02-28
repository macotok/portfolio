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
        <p class="m-text-errorMessage">
          {{nonInputMessage}}
        </p>
      </div>
    </div>
    <table class="m-table-01">
      <tr>
        <th>
          スキル名
        </th>
        <td>
          <input-text
            name="skillTitle"
            :model="addNewSkill.title"
            placeholder=""
            eventName="skillTitle"
            @skillTitle="title"
          >
          </input-text>
          <div v-if="inputCheck.indexOf('title') >= 0">
            <non-input
              text="スキル名"
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
            name="skillImage"
            :model="addNewSkill.image_path"
            eventName="skillImage"
            @skillImage="image"
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
          内容
        </th>
        <td>
          <input-text-area
            name="skillText"
            :model="addNewSkill.text"
            placeholder=""
            eventName="skillText"
            rows="10"
            @skillText="text"
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
      eventName="addSkill"
      @addSkill="save"
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
    addNewSkill() {
      return this.$store.state.addNewSkill;
    },
    inputCheck() {
      const nonInputValidate = new NonInputValidate(this.$store.state.addNewSkill);
      return nonInputValidate.inputCheck();
    },
    nonInputMessage() {
      return NON_INPUT_MESSAGE;
    },
  },
  methods: {
    title(value) {
      this.$store.commit('addSkillData', { title: value });
    },
    image(value, fileName) {
      this.$store.commit('addSkillData', { image_path: value, image_name: fileName });
    },
    text(value) {
      this.$store.commit('addSkillData', { text: value });
    },
    save() {
      if (this.inputCheck.length) {
        this.validate = false;
        window.scrollTo(0, 0);
      } else {
        this.$store.commit('addSkill', this.$store.state.addNewSkill);
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
