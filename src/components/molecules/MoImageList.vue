<template lang="pug">
  ul.moImageList
    li.moImageList-item(
      v-for="data in displayList"
    )
      at-image(
        :src="data.image_path"
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
import MoTextList from '@/components/molecules/MoTextList';

export default {
  components: {
    AtImage,
    AtText,
    MoTextList,
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
  },
  computed: {
    displayList() {
      return [...this.list].splice(this.listStart, this.length);
    },
    styles() {
      return {
        atImage: {
          display: 'block',
          borderRadius: '3px',
          margin: '0 auto',
        },
        atText: {
          fontWeight: 'bold',
          margin: '.5em 0',
        },
      };
    },
  },
};
</script>
