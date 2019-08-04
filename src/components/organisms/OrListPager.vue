<template lang="pug">
  div
    mo-image-list(
      :pageType="pageType"
      :list="list"
      :pagerNumber="pagerNumber"
      :length="length"
    )
    at-pagination(
      :actionType="actionType"
      :length="length"
      :pageType="pageType"
      :targetKey="targetKey"
    )
</template>

<script>
import AtPagination from '@/components/atoms/pagination/AtPagination';
import MoImageList from '@/components/molecules/list/MoImageList';

export default {
  components: {
    AtPagination,
    MoImageList,
  },
  props: {
    actionType: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
    pagerNumber: {
      type: Number,
      required: true,
    },
    pageType: {
      type: String,
      required: true,
    },
    targetKey: {
      type: String,
      required: true,
    },
  },
  created() {
    this.$store.dispatch(`${this.pageType}/${this.actionType}`, {
      currentPagerNumber: 1,
    });
  },
};
</script>
