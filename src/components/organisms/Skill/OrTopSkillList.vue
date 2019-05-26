<template lang="pug">
  div.orTopSkillList
    at-ul-li(
      :list="list"
      :styles="styles"
    )
</template>

<script>
import AtUlLi from '@/components/atoms/list/AtUlLi';

export default {
  components: {
    AtUlLi,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    styles() {
      return {
        ul: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        li: {
          backgroundColor: '#5b657a',
          padding: '3px 6px',
          margin: '0 .5rem .5rem 0',
          fontSize: '.7rem',
          color: '#f6f9ff',
          borderRadius: '3px',
          border: '1px solid #5b657a',
        },
      };
    },
  },
};
</script>

<style lang="scss">
  .orTopSkillList {
    margin-bottom: 2rem;
  }
</style>
