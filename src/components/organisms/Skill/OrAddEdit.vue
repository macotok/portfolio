<template lang="pug">
  div.orAddEdit
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
        ) スキル名
        MoInputFile(
          name="image"
          :src="editData.image.path"
          :nameSpace="nameSpace"
          :actionType="actionType"
        ) 画像
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
import { AC_SAVE_DATA } from '@/store/skill/actions/saveData';
import AtSubmit from '@/components/atoms/form/AtSubmit';
import MoInputFile from '@/components/molecules/form/MoInputFile';
import MoInputText from '@/components/molecules/form/MoInputText';
import MoInputTextArea from '@/components/molecules/form/MoInputTextArea';
import MoLabelID from '@/components/molecules/form/MoLabelID';

export default {
  components: {
    ValidationObserver,
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
    ...mapState('admin', {
      isLoginAdmin: state => state.isLoginAdmin,
    }),
    vValidate() {
      return {
        required: {
          required: true,
        },
      };
    },
    buttonText() {
      return this.editData.id ? '編集' : '追加';
    },
  },
  methods: {
    ...mapActions('skill', [AC_SAVE_DATA]),
    async submit() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        return false;
      }
      if (!this.isLoginAdmin) {
        this.$router.push({ name: 'root' });
      }
      this[AC_SAVE_DATA]();
      this.$router.push({ name: 'root' });
      return false;
    },
  },
};
</script>
