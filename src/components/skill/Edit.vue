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
          ID
        </th>
        <td>
          {{editSkill.id}}
        </td>
      </tr>
      <tr>
        <th>
          スキル名
        </th>
        <td>
          <input-text
            name="skillTitle"
            :model="editSkill.title"
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
            :model="editSkill.image_path"
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
            :model="editSkill.text"
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
    <div class="m-buttonBlock-01">
      <submit-button
        eventName="editSkill"
        text="保存"
        @editSkill="save"
      >
      </submit-button>
      <back-button
        text="戻る"
        linkTo="/skills"
      >
      </back-button>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/form/InputText';
import InputTextArea from '@/components/form/InputTextArea';
import InputFile from '@/components/form/InputFile';
import SubmitButton from '@/components/button/Submit';
import NonInput from '@/components/errorMessage/NonInput';
import NonSelect from '@/components/errorMessage/NonSelect';
import BackButton from '@/components/button/Back';
import NonInputValidate from '@/utils/NonInputValidate';

export default {
  data() {
    return {
      validate: true,
    };
  },
  created() {
    this.$store.state.editSkill = this.editSkill;
  },
  computed: {
    editSkill() {
      const skillList = this.$store.state.skill;
      const editSkill = skillList.find(s => (
        s.id === parseInt(this.$route.params.id, 10)
      ));
      return editSkill;
    },
    inputCheck() {
      const nonInputValidate = new NonInputValidate(this.$store.state.editSkill);
      return nonInputValidate.inputCheck();
    },
  },
  methods: {
    title(value) {
      this.$store.commit('updateSkillData', { title: value, id: parseInt(this.$route.params.id, 10) });
    },
    image(value, fileName) {
      this.$store.commit('updateSkillData', { image_path: value, image_name: fileName, id: parseInt(this.$route.params.id, 10) });
    },
    text(value) {
      this.$store.commit('updateSkillData', { text: value, id: parseInt(this.$route.params.id, 10) });
    },
    save() {
      if (this.inputCheck.length) {
        this.validate = false;
        window.scrollTo(0, 0);
      } else {
        this.$store.commit('updateSkill', this.$store.state.editSkill);
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
    BackButton,
  },
};
</script>
