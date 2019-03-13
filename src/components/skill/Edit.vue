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
      tr
        th ID
        td {{editSkill.id}}
      tr
        th スキル名
        td
          input-text(
            name="skillTitle",
            :model="editSkill.title",
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
            :model="editSkill.image_path",
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
            :model="editSkill.text",
            placeholder="",
            eventName="skillText",
            rows="10",
            @skillText="text"
          )
          div(v-if="inputCheck.indexOf('text') >= 0")
            non-input(text="内容")
    div.m-buttonBlock-01
      submit-button(eventName="editSkill", @editSkill="save") 保存
      back-button(linkTo="/skills") 戻る
</template>

<script>
import { mapState } from 'vuex';
import InputText from '@/components/form/InputText';
import InputTextArea from '@/components/form/InputTextArea';
import InputFile from '@/components/form/InputFile';
import SubmitButton from '@/components/button/Submit';
import NonInput from '@/components/errorMessage/NonInput';
import NonSelect from '@/components/errorMessage/NonSelect';
import BackButton from '@/components/button/Back';
import NonInputValidate from '@/utils/NonInputValidate';
import { NON_INPUT_MESSAGE } from '@/defines/';
import editSkill from '../../store/editSkill';

export default {
  data() {
    return {
      privateState: {
        validate: true,
      },
    };
  },
  created() {
    this.$store.dispatch('getEditData', {
      type: 'skill',
      editData: this.editSkill,
    });
  },
  computed: {
    ...mapState({
      editSkill(state) {
        return state.skill.find(s => (
          s.id === parseInt(this.$route.params.id, 10)
        ));
      },
      inputCheck(state) {
        const nonInputValidate = new NonInputValidate(state.editSkill);
        return nonInputValidate.inputCheck();
      },
      editSkillData: 'editSkill',
    }),
    nonInputMessage() {
      return NON_INPUT_MESSAGE;
    },
  },
  methods: {
    title(value) {
      this.$store.dispatch('updateFormValue', {
        type: 'editSkill',
        mutationName: 'updateSkillData',
        value: {
          title: value,
          id: parseInt(this.$route.params.id, 10),
        },
      });
    },
    image(value, fileName) {
      this.$store.dispatch('updateFormValue', {
        type: 'editSkill',
        mutationName: 'updateSkillData',
        value: {
          image_path: value,
          image_name: fileName,
          id: parseInt(this.$route.params.id, 10),
        },
      });
    },
    text(value) {
      this.$store.dispatch('updateFormValue', {
        type: 'editSkill',
        mutationName: 'updateSkillData',
        value: {
          text: value,
          id: parseInt(this.$route.params.id, 10),
        },
      });
    },
    save() {
      if (this.inputCheck.length) {
        this.privateState.validate = false;
        window.scrollTo(0, 0);
      } else {
        this.$store.dispatch('updateData', {
          type: 'skill',
          updateData: this.editSkillData,
        });
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
