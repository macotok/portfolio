<template lang="pug">
  ul.moImageList
    li.moImageList-item(
      v-for="data in displayList"
    )
      router-link(
        class="moImageList-link"
        :to="`/${pageType}/${data.id}`"
      )
        at-image(
          :src="data.image ? data.image.path : ''"
          :alt="data.title"
          :style="styles.atImage"
          :width="200"
        )
        at-text(
          :styles="styles.atText"
        ) {{ data.title }}
        mo-text-list(
          :list="data.tags"
        )
</template>

<script>
import AtImage from '@/components/atoms/image/AtImage';
import AtText from '@/components/atoms/text/AtText';
import MoTextList from '@/components/molecules/list/MoTextList';

export default {
  components: {
    AtImage,
    AtText,
    MoTextList,
  },
  props: {
    pageType: {
      type: String,
      required: true,
    },
    pagerNumber: {
      type: Number,
      default: null,
    },
    length: {
      type: Number,
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    displayList() {
      return [...this.list].splice(this.pagerNumber, this.length);
    },
    styles() {
      return {
        atImage: {
          display: 'block',
          borderRadius: '3px',
          margin: '0 auto',
        },
        atText: {
          color: '#333',
          fontWeight: 'bold',
          margin: '.5em 0',
        },
      };
    },
  },
};
</script>
