<style scoped lang="scss">
  table {
    width: 100%;
    th {
      text-align: left;
      width: 15%;
    }
  }
</style>

<template lang="pug">
  div
    div(v-if="!privateState.validate")
      div.m-box-errorMessage
        p.m-text-errorMessage {{nonInputMessage}}
    table.m-table-01
      tr(v-if="skillData.title")
        th ID
        td {{skillData.id}}
      tr
        th スキル名
        td
          input-text(
            name="skillTitle",
            :model="skillData.title",
            placeholder="",
            eventName="skillTitle",
            @skillTitle="title"
          )
          div(v-if="inputCheck.indexOf('title') >= 0")
            non-input(text="スキル名")
      tr
        th 画像
        td
          input-file(
            labelName="選択",
            thumnailSize="250",
            name="skillImage",
            :model="skillData.image_path",
            eventName="skillImage",
            @skillImage="image"
          )
          div(v-if="inputCheck.indexOf('image_path') >= 0")
            non-select(text="画像")
      tr
        th 内容
        td
          input-text-area(
            name="skillText",
            :model="skillData.text",
            placeholder="",
            eventName="skillText",
            rows="10",
            @skillText="text"
          )
          div(v-if="inputCheck.indexOf('text') >= 0")
            non-input(text="内容")
    div.m-buttonBlock-01(v-if="skillData.title")
      submit-button(eventName="editSkill", @editSkill="save") 保存
      back-button(linkTo="/skills") 戻る
    submit-button(v-else, eventName="addSkill", @addSkill="save") 追加
</template>

<script>
import { mapState, mapActions } from 'vuex';
import InputText from '@/components/form/InputText';
import InputTextArea from '@/components/form/InputTextArea';
import InputFile from '@/components/form/InputFile';
import SubmitButton from '@/components/button/Submit';
import NonInput from '@/components/errorMessage/NonInput';
import NonSelect from '@/components/errorMessage/NonSelect';
import BackButton from '@/components/button/Back';
import NonInputValidate from '@/utils/NonInputValidate';
import { NON_INPUT_MESSAGE } from '@/defines/';
import inputSkillData from '@/store/inputSkillData';

export default {
  data() {
    return {
      privateState: {
        validate: true,
      },
    };
  },
  created() {
    this.checkHasData({
      type: 'skill',
      targetData: this.skillData,
    });
  },
  computed: {
    ...mapState({
      hasData(state) {
        return state.skill.find(s => (
          s.id === parseInt(this.$route.params.id, 10)
        ));
      },
      skillData(state) {
        let findData = this.hasData;
        if (!findData) {
          const createId = state.skill.reduce((id, data) => (id < data.id ? data.id : id), 0) + 1;
          findData = Object.assign({}, inputSkillData, { id: createId });
        }
        return findData;
      },
      inputCheck(state) {
        const nonInputValidate = new NonInputValidate(state.inputSkillData);
        return nonInputValidate.inputCheck();
      },
      inputSkillData: 'inputSkillData',
    }),
    nonInputMessage() {
      return NON_INPUT_MESSAGE;
    },
  },
  methods: {
    ...mapActions(['checkHasData', 'updateFormValue', 'updateData', 'addData']),
    title(value) {
      this.updateFormValue({
        type: 'inputSkillData',
        mutationName: 'updateSkillData',
        value: {
          title: value,
        },
      });
    },
    image(value, fileName) {
      this.updateFormValue({
        type: 'inputSkillData',
        mutationName: 'updateSkillData',
        value: {
          image_path: value,
          image_name: fileName,
        },
      });
    },
    text(value) {
      this.updateFormValue({
        type: 'inputSkillData',
        mutationName: 'updateSkillData',
        value: {
          text: value,
        },
      });
    },
    save() {
      if (this.inputCheck.length) {
        this.privateState.validate = false;
        window.scrollTo(0, 0);
      } else {
        if (this.hasData) {
          this.updateData({
            type: 'skill',
            updateData: this.inputSkillData,
          });
        } else {
          this.addData({
            type: 'skill',
            addData: this.inputSkillData,
          });
        }
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
