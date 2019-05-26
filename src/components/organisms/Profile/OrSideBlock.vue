<template lang="pug">
  div
    at-image(
      src="/images/profile.jpg"
      alt="@macotok"
      width="200"
      :styles="styles.atImage"
    )
    at-text(
      :styles="styles.atText"
    ) @macotok
    ul.OrSideBlock-list
      li.OrSideBlock-item
        at-link(
          href="https://github.com/macotok"
          target="_blank"
        )
          at-image(
            src="/images/github.svg"
            alt="github"
            width="20"
          )
      li
        at-link(
          href="https://qiita.com/macotok"
          target="_blank"
        )
          at-image(
            src="/images/qiita.svg"
            alt="qiita"
            width="20"
          )
</template>

<script>
import AtImage from '@/components/atoms/image/AtImage';
import AtLink from '@/components/atoms/text/AtLink';
import AtText from '@/components/atoms/text/AtText';

export default {
  components: {
    AtImage,
    AtLink,
    AtText,
  },
  computed: {
    styles() {
      return {
        atImage: {
          display: 'block',
          borderRadius: '3px',
        },
        atText: {
          padding: '0.5rem 0',
          fontWeight: 'bold',
          fontSize: '1.1rem',
        },
      };
    },
  },
};
</script>
