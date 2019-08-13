<template lang="pug">
  ul.moImageList
    li.moImageList-item(
      v-for="data in displayList"
      :key="data.id"
    )
      router-link(
        class="moImageList-link"
        :to="`/${pageType}/${data.id}`"
      )
        at-lazy-image(
          :src="data.image ? data.image.path : ''"
          :alt="data.title"
          :styles="styles.atLazyImage"
        )
        at-text(
          :styles="styles.atText"
        ) {{ data.title }}
        mo-text-list(
          :list="data.tags"
        )
</template>

<script>
import AtLazyImage from '@/components/atoms/image/AtLazyImage';
import AtText from '@/components/atoms/text/AtText';
import MoTextList from '@/components/molecules/list/MoTextList';

export default {
  components: {
    AtLazyImage,
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
      if (this.pagerNumber) {
        return [...this.list].splice((this.pagerNumber - 1) * this.length, this.length);
      }
      return [...this.list].splice(0, this.length);
    },
    styles() {
      return {
        atText: {
          color: '#333',
          fontWeight: 'bold',
          margin: '.5em 0',
        },
        atLazyImage: {
          lazyWrapper: {
            width: '200px',
            height: '100%',
            minHeight: '120px',
            margin: '0 auto',
          },
          lazyImage: {
            width: '200px',
          },
        },
      };
    },
  },
};
</script>
