<template lang="pug">
  div
    at-image(
      src="/images/profile.jpg"
      alt="@macotok"
      width="200"
    )
    at-text @macotok
    at-link(
      href="https://github.com/macotok"
      target="_blank"
    )
      at-image(
        src="/images/github.svg"
        alt="github"
        width="20"
      )
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
};
</script>
