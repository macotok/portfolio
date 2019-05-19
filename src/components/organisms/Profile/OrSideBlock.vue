<template lang="pug">
  div
    at-image(
      src="/images/profile.jpg"
      alt="@macotok"
      width="200"
    )
    at-text @macotok
    at-link-image(
      href="https://github.com/macotok"
      target="_blank"
      src="/images/github.svg"
      alt="github"
      width="20"
    )
    at-link-image(
      href="https://qiita.com/macotok"
      target="_blank"
      src="/images/qiita.svg"
      alt="qiita"
      width="20"
    )
</template>

<script>
import AtImage from '@/components/atoms/image/AtImage';
import AtLinkImage from '@/components/atoms/image/AtLinkImage';
import AtText from '@/components/atoms/text/AtText';

export default {
  components: {
    AtImage,
    AtLinkImage,
    AtText,
  },
};
</script>
