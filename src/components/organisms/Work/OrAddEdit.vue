<template lang="pug">
  div.orAddEdit
    mo-message-board(
      v-if="!isLoginAdmin"
      :styles="styles"
    ) {{ POST_ERROR_MESSAGE }}
    ValidationObserver(
      ref="observer"
      v-slot="{ invalid }"
      tag="form"
      @submit.prevent="submit()"
    )
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
      at-submit {{ buttonText }}
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { ValidationObserver } from 'vee-validate';
import { POST_ERROR_MESSAGE } from '@/defines';
import { AC_SAVE_DATA } from '@/store/work/actions/saveData';
import AtSubmit from '@/components/atoms/form/AtSubmit';
import MoInputFile from '@/components/molecules/form/MoInputFile';
import MoInputText from '@/components/molecules/form/MoInputText';
import MoInputTextArea from '@/components/molecules/form/MoInputTextArea';
import MoLabelID from '@/components/molecules/form/MoLabelID';
import MoMessageBoard from '@/components/molecules/text/MoMessageBoard';

export default {
  components: {
    ValidationObserver,
    AtSubmit,
    MoInputFile,
    MoInputText,
    MoInputTextArea,
    MoLabelID,
    MoMessageBoard,
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
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
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
          url: {
            require_protocol: true,
          },
        },
      };
    },
    buttonText() {
      return this.editData.id ? '編集' : '追加';
    },
    POST_ERROR_MESSAGE: () => POST_ERROR_MESSAGE,
    styles() {
      return {
        textColor: {
          color: '#fff',
        },
      };
    },
  },
  methods: {
    ...mapActions('work', [AC_SAVE_DATA]),
    async submit() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return false;
      }
      if (!this.isLoginAdmin) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return false;
      }
      this[AC_SAVE_DATA]();
      this.$router.push({ name: 'root' });
      return false;
    },
  },
};
</script>
