<template lang="pug">
  div.WorkOrDetail
    at-image(
      :src="data.image_path"
      :alt="data.title"
      width="300"
      height="100%"
    )
    div.WorkOrDetail-inner
      mo-text-list(
        :list="data.tags"
        :styles="styles.moTextList"
      )
      at-text {{ data.text }}
      at-button(
        :styles="styles.atButton"
        :href="data.url"
      ) To Page
      mo-two-button(
        classNameLeft="atButtonLeft"
        classNameRight="atButtonRight"
        @click-button-left="clickButtonLeft"
        @click-button-right="clickButtonRight"
      )
        template(v-slot:first) 削除
        template(v-slot:second) 編集
</template>

<script>
import AtButton from '@/components/atoms/button/AtButton';
import AtImage from '@/components/atoms/image/AtImage';
import AtText from '@/components/atoms/text/AtText';
import MoTextList from '@/components/molecules/MoTextList';
import MoTwoButton from '@/components/molecules/MoTwoButton';

export default {
  components: {
    AtButton,
    AtImage,
    AtText,
    MoTextList,
    MoTwoButton,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    styles() {
      return {
        atButton: {
          button: {
            marginTop: '2rem',
          },
        },
        moTextList: {
          ul: {
            marginBottom: '0',
          },
        },
      };
    },
  },
  methods: {
    clickButtonLeft() {
      console.log(1);
    },
    clickButtonRight() {
      console.log(2);
    },
  },
};
</script>
