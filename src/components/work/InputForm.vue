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
      tr(v-if="workData.title")
        th ID
        td {{workData.id}}
      tr
        th タイトル
        td
          input-text(
            name="workTitle",
            :model="workData.title",
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
            :model="workData.tags",
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
            :model="workData.image_path",
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
            :model="workData.url",
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
            :model="workData.text",
            placeholder="",
            eventName="workText",
            rows="10",
            @workText="text"
          )
          div(v-if="inputCheck.indexOf('text') >= 0")
            non-input(text="内容")
    div.m-buttonBlock-01(v-if="workData.title")
      submit-button(eventName="editWork", @editWork="save") 保存
      back-button(:linkTo="`/work/${getWorkId}`") 戻る
    submit-button(v-else, eventName="addWork", @addWork="save") 追加
</template>

<script>
import { mapState, mapActions } from 'vuex';
import InputText from '@/components/form/InputText';
import InputTextArea from '@/components/form/InputTextArea';
import InputFile from '@/components/form/InputFile';
import SubmitButton from '@/components/button/Submit';
import NonInput from '@/components/errorMessage/NonInput';
import NonSelect from '@/components/errorMessage/NonSelect';
import NonInputValidate from '@/utils/NonInputValidate';
import BackButton from '@/components/button/Back';
import { NON_INPUT_MESSAGE } from '@/defines/';
import inputWorkData from '@/store/inputWorkData';

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
      type: 'works',
      targetData: this.workData,
    });
  },
  computed: {
    ...mapState({
      hasData(state) {
        return state.works.find(w => (
          w.id === parseInt(this.$route.params.id, 10)
        ));
      },
      workData(state) {
        let findData = this.hasData;
        if (!findData) {
          const createId = state.works.reduce((id, data) => (id < data.id ? data.id : id), 0) + 1;
          findData = Object.assign({}, inputWorkData, { id: createId });
        }
        return findData;
      },
      inputCheck(state) {
        const nonInputValidate = new NonInputValidate(state.inputWorkData);
        return nonInputValidate.inputCheck();
      },
      inputWorkData: 'inputWorkData',
    }),
    getWorkId() {
      return this.$route.params.id;
    },
    nonInputMessage() {
      return NON_INPUT_MESSAGE;
    },
  },
  methods: {
    ...mapActions(['checkHasData', 'updateFormValue', 'updateData', 'addData']),
    title(value) {
      this.updateFormValue({
        type: 'inputWorkData',
        mutationName: 'updateWorkData',
        value: {
          title: value,
        },
      });
    },
    tags(value) {
      this.updateFormValue({
        type: 'inputWorkData',
        mutationName: 'updateWorkData',
        value: {
          tags: value.trim() ? value.replace(/\s+/g, '').split(',') : [],
        },
      });
    },
    url(value) {
      this.updateFormValue({
        type: 'inputWorkData',
        mutationName: 'updateWorkData',
        value: {
          url: value,
        },
      });
    },
    image(value, fileName) {
      this.updateFormValue({
        type: 'inputWorkData',
        mutationName: 'updateWorkData',
        value: {
          image_path: value,
          image_name: fileName,
        },
      });
    },
    text(value) {
      this.updateFormValue({
        type: 'inputWorkData',
        mutationName: 'updateWorkData',
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
            type: 'works',
            updateData: this.inputWorkData,
          });
        } else {
          this.addData({
            type: 'works',
            addData: this.inputWorkData,
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
