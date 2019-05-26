<template lang="pug">
  ul.moList
    li.moList-item(
      v-for="data in list"
    )
      at-image(
        :src="data.image_path"
        :alt="data.title"
      )
      at-text {{ data.title }}
      at-ul-li(
        :list="data.tags"
      )
</template>

<script>
import AtImage from '@/components/atoms/image/AtImage';
import AtText from '@/components/atoms/text/AtText';
import AtUlLi from '@/components/atoms/list/AtUlLi';

export default {
  components: {
    AtImage,
    AtText,
    AtUlLi,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
