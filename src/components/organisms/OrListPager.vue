<template lang="pug">
  div
    mo-image-list(
      :pageType="pageType"
      :list="list"
      :listStart="listStart"
      :length="length"
    )
    at-pagination(
      :length="length"
      :pageType="pageType"
      :targetKey="targetKey"
    )
</template>

<script>
import AtPagination from '@/components/atoms/pagination/AtPagination';
import MoImageList from '@/components/molecules/MoImageList';

export default {
  components: {
    AtPagination,
    MoImageList,
  },
  props: {
    length: {
      type: Number,
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
    listStart: {
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
};
</script>
