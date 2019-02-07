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
        </td>
      </tr>
    </table>
    <submit-button
      eventName="addSkill"
      text="追加"
      @addSkill="save"
    >
    </submit-button>
  </div>
</template>

<script>
import InputText from '../form/InputText';
import InputTextArea from '../form/InputTextArea';
import InputFile from '../form/InputFile';
import SubmitButton from '../button/SubmitButton';

export default {
  computed: {
    addNewSkill() {
      return this.$store.state.addNewSkill;
    },
  },
  methods: {
    title(value) {
      const data = { title: value };
      this.$store.commit('addSkillData', data);
    },
    image(value) {
      const data = { image_path: value };
      this.$store.commit('addSkillData', data);
    },
    text(value) {
      const data = { text: value };
      this.$store.commit('addSkillData', data);
    },
    save() {
      this.$store.commit('addSkill', this.$store.state.addNewSkill);
      this.$router.push({ name: 'root' });
    },
  },
  components: {
    InputText,
    InputTextArea,
    InputFile,
    SubmitButton,
  },
};
</script>
