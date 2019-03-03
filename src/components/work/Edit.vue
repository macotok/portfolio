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
    div(v-if="!validate")
      div.m-box-errorMessage
        p.m-text-errorMessage {{nonInputMessage}}
    table.m-table-01
      tr
        th ID
        td {{editWork.id}}
      tr
        th タイトル
        td
          input-text(
            name="workTitle",
            :model="editWork.title",
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
            :model="editWork.tags",
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
            :model="editWork.image_path",
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
            :model="editWork.url",
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
            :model="editWork.text",
            placeholder="",
            eventName="workText",
            rows="10",
            @workText="text"
          )
          div(v-if="inputCheck.indexOf('text') >= 0")
            non-input(text="内容")
    div.m-buttonBlock-01
      submit-button(eventName="editWork", @editWork="save") 保存
      back-button(:linkTo="`/work/${getWorkId}`") 戻る
</template>

<script>
import InputText from '@/components/form/InputText';
import InputTextArea from '@/components/form/InputTextArea';
import InputFile from '@/components/form/InputFile';
import SubmitButton from '@/components/button/Submit';
import NonInput from '@/components/errorMessage/NonInput';
import NonSelect from '@/components/errorMessage/NonSelect';
import NonInputValidate from '@/utils/NonInputValidate';
import BackButton from '@/components/button/Back';
import { NON_INPUT_MESSAGE } from '@/defines/';

export default {
  data() {
    return {
      validate: true,
    };
  },
  created() {
    this.$store.state.editWork = this.editWork;
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
      const nonInputValidate = new NonInputValidate(this.$store.state.editWork);
      return nonInputValidate.inputCheck();
    },
    getWorkId() {
      return this.$route.params.id;
    },
    nonInputMessage() {
      return NON_INPUT_MESSAGE;
    },
  },
  methods: {
    title(value) {
      this.$store.commit('updateWorkData', { title: value, id: parseInt(this.$route.params.id, 10) });
    },
    tags(value) {
      this.$store.commit('updateWorkData', {
        tags: value.trim() ? value.replace(/\s+/g, '').split(',') : [],
        id: parseInt(this.$route.params.id, 10),
      });
    },
    url(value) {
      this.$store.commit('updateWorkData', { url: value, id: parseInt(this.$route.params.id, 10) });
    },
    image(value, fileName) {
      this.$store.commit('updateWorkData', { image_path: value, image_name: fileName, id: parseInt(this.$route.params.id, 10) });
    },
    text(value) {
      this.$store.commit('updateWorkData', { text: value, id: parseInt(this.$route.params.id, 10) });
    },
    save() {
      if (this.inputCheck.length) {
        this.validate = false;
        window.scrollTo(0, 0);
      } else {
        this.$store.dispatch('updateData', {
          type: 'works',
          updateData: this.$store.state.editWork,
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
