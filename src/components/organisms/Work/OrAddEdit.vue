<template lang="pug">
  div.orAddEdit
    table.orAddEdit-table
      MoLabelID(
        v-if="editData.id"
        :numberID="editData.id"
      )
      MoInputText(
        name="title"
        :value="editData.title"
        :nameSpace="nameSpace"
        :actionType="actionType"
        :vValidate="vValidate.required"
      ) タイトル
      MoInputText(
        name="tags"
        placeholder="カンマ区切りで指定"
        :value="fixStringOfTags"
        :nameSpace="nameSpace"
        :actionType="actionType"
        :vValidate="vValidate.required"
      ) タグ
      MoInputFile(
        name="image"
        :src="editData.image.path"
        :nameSpace="nameSpace"
        :actionType="actionType"
        :vValidate="vValidate.required"
      ) 画像
      MoInputText(
        name="url"
        :value="editData.url"
        :nameSpace="nameSpace"
        :actionType="actionType"
        :vValidate="vValidate.url"
      ) URL
      MoInputTextArea(
        name="text"
        :value="editData.text"
        :nameSpace="nameSpace"
        :actionType="actionType"
        :vValidate="vValidate.required"
      ) 内容
    at-submit(
      @click-button="clickButton"
    ) 追加
</template>

<script>
import { mapActions } from 'vuex';
import { AC_SAVE_DATA } from '@/store/work/actions/saveData';
import AtSubmit from '@/components/atoms/form/AtSubmit';
import MoInputFile from '@/components/molecules/MoInputFile';
import MoInputText from '@/components/molecules/MoInputText';
import MoInputTextArea from '@/components/molecules/MoInputTextArea';
import MoLabelID from '@/components/molecules/MoLabelID';

export default {
  components: {
    AtSubmit,
    MoInputFile,
    MoInputText,
    MoInputTextArea,
    MoLabelID,
  },
  props: {
    nameSpace: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
    },
    editData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    fixStringOfTags() {
      if (!this.editData.tags) return null;
      return (this.editData.tags).join(',');
    },
    vValidate() {
      return {
        required: {
          required: true,
        },
        url: {
          required: true,
          min: 20,
          url: {
            require_protocol: true,
          },
        },
      };
    },
  },
  methods: {
    ...mapActions('work', [AC_SAVE_DATA]),
    clickButton() {
      this[AC_SAVE_DATA]();
      this.$router.push({ name: 'root' });
    },
  },
};
</script>
