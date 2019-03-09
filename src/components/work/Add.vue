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
        th タイトル
        td
          input-text(
            name="workTitle",
            :model="addNewWork.title",
            placeholder="",
            eventName="workTitle",
            @workTitle="title"
          )
          div(v-if="inputCheck.indexOf('title') >= 0")
            non-input(text="タイトル")
      tr
        th タグ
        td
          input-text(
            name="workTags",
            :model="addNewWork.tags",
            placeholder="カンマ区切りで指定",
            eventName="workTags",
            @workTags="tags"
          )
          div(v-if="inputCheck.indexOf('tags') >= 0")
            non-input(text="タグ")
      tr
        th 画像
        td
          input-file(
            labelName="選択",
            thumnailSize="250",
            name="workImage",
            :model="addNewWork.image_path",
            eventName="workImage",
            @workImage="image"
          )
          div(v-if="inputCheck.indexOf('image_path') >= 0")
            non-select(text="画像")
      tr
        th URL
        td
          input-text(
            name="workUrl",
            :model="addNewWork.url",
            placeholder="",
            eventName="workUrl",
            @workUrl="url"
          )
          div(v-if="inputCheck.indexOf('url') >= 0")
            non-input(text="URL")
      tr
        th 内容
        td
          input-text-area(
            name="workText",
            :model="addNewWork.text",
            placeholder="",
            eventName="workText",
            rows="10",
            @workText="text"
          )
          div(v-if="inputCheck.indexOf('text') >= 0")
            non-input(text="内容")
    submit-button(eventName="addWork", @addWork="save") 追加
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
      privateState: {
        validate: true,
      },
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
      this.$store.dispatch('updateFormValue', {
        type: 'addNewWork',
        mutationName: 'addWorkData',
        value: {
          title: value,
        },
      });
    },
    tags(value) {
      const data = { tags: value.trim() ? value.replace(/\s+/g, '').split(',') : [] };
      this.$store.dispatch('updateFormValue', {
        type: 'addNewWork',
        mutationName: 'addWorkData',
        value: data,
      });
    },
    url(value) {
      this.$store.dispatch('updateFormValue', {
        type: 'addNewWork',
        mutationName: 'addWorkData',
        value: {
          url: value,
        },
      });
    },
    image(value, fileName) {
      this.$store.dispatch('updateFormValue', {
        type: 'addNewWork',
        mutationName: 'addWorkData',
        value: {
          image_path: value,
          image_name: fileName,
        },
      });
    },
    text(value) {
      this.$store.dispatch('updateFormValue', {
        type: 'addNewWork',
        mutationName: 'addWorkData',
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
          type: 'works',
          addData: this.$store.state.addNewWork,
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
