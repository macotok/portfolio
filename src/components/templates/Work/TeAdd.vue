<template lang="pug">
  div
    or-header
    or-header-nav
    div.l-container
      at-title-h2 {{ pageTitle }}
      or-add(
        :nameSpace="nameSpace"
        :actionType="actionType"
        :editData="editData"
      )
    or-footer
</template>

<script>
import { mapState } from 'vuex';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import OrAdd from '@/components/organisms/Work/OrAdd';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';
import MoInputText from '@/components/molecules/MoInputText';

export default {
  components: {
    AtTitleH2,
    OrAdd,
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
    ...mapState('work', {
      dataList: state => state.db,
    }),
    pageTitle() {
      return (this.isEditPage) ? 'edit Work' : 'add Work';
    },
    editData() {
      if (!this.isEditPage) return false;
      return this.dataList.find(data => data.id === parseInt(this.isEditPage, 10));
    },
  },
};
</script>
