<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 {{ pageTitle }}
      or-add-edit(
        :nameSpace="nameSpace"
        :actionType="actionType"
        :editData="editData"
      )
    or-footer
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { AC_UPDATE_INPUT_OF_EDIT } from '@/store/work/actions/updateInputOfEdit';
import { AC_RESET_INPUT_DATA } from '@/store/work/actions/resetInputData';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrAddEdit from '@/components/organisms/Skill/OrAddEdit';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import MoInputText from '@/components/molecules/form/MoInputText';

export default {
  components: {
    AtTitleH2,
    OrAddEdit,
    OrFooter,
    OrHeader,
    OrHeaderNav,
    MoInputText,
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
    isEditPage: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    ...mapState('skill', {
      dataList: state => state.db,
      inputList: state => state.update,
    }),
    pageTitle() {
      return (this.isEditPage) ? 'edit Skill' : 'add Skill';
    },
    editData() {
      // 新規画面
      if (!this.isEditPage) {
        this[AC_RESET_INPUT_DATA]();
        return this.inputList;
      }
      // 編集画面
      const editData = this.dataList.find(data => data.id === parseInt(this.isEditPage, 10));
      this[AC_UPDATE_INPUT_OF_EDIT](editData);
      return editData;
    },
  },
  methods: {
    ...mapActions('skill', [AC_UPDATE_INPUT_OF_EDIT, AC_RESET_INPUT_DATA]),
  },
};
</script>
