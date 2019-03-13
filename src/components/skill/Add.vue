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
        th スキル名
        td
          input-text(
            name="skillTitle",
            :model="addNewSkill.title",
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
            :model="addNewSkill.image_path",
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
            :model="addNewSkill.text",
            placeholder="",
            eventName="skillText",
            rows="10",
            @skillText="text"
          )
          div(v-if="inputCheck.indexOf('text') >= 0")
            non-input(text="内容")
    submit-button(eventName="addSkill", @addSkill="save") 追加
</template>

<script>
import { mapState } from 'vuex';
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
      privateState: {
        validate: true,
      },
    };
  },
  computed: {
    ...mapState({
      addNewSkill: 'addNewSkill',
      inputCheck(state) {
        const nonInputValidate = new NonInputValidate(state.addNewSkill);
        return nonInputValidate.inputCheck();
      },
    }),
    nonInputMessage() {
      return NON_INPUT_MESSAGE;
    },
  },
  methods: {
    title(value) {
      this.$store.dispatch('updateFormValue', {
        type: 'addNewSkill',
        mutationName: 'addSkillData',
        value: {
          title: value,
        },
      });
    },
    image(value, fileName) {
      this.$store.dispatch('updateFormValue', {
        type: 'addNewSkill',
        mutationName: 'addSkillData',
        value: {
          image_path: value,
          image_name: fileName,
        },
      });
    },
    text(value) {
      this.$store.dispatch('updateFormValue', {
        type: 'addNewSkill',
        mutationName: 'addSkillData',
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
        this.$store.dispatch('addData', {
          type: 'skill',
          addData: this.addNewSkill,
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
  },
};
</script>
