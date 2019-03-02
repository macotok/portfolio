<style scoped lang="scss" >
.workBlock {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<template lang="pug">
  div
    div.workBlock(v-if="hasWork")
      ul
        work-item(
          v-for="(work, index) in filteredWorks",
          :key="index",
          :work="work",
          @select="select"
        )
    div(v-else) {{nonWorksData}}
</template>

<script>
import WorkItem from '@/components/work/Item';
import { NON_WORKS_DATA } from '@/defines/';

export default {
  props: {
    works: Array,
    start: Number,
    count: Number,
  },
  computed: {
    hasWork() {
      return this.filteredWorks && this.filteredWorks.length !== 0;
    },
    filteredWorks() {
      let works = this.works.concat();
      if (this.count) {
        works = works.splice(this.start, this.count);
      }
      return works;
    },
    nonWorksData() {
      return NON_WORKS_DATA;
    },
  },
  methods: {
    select(id) {
      this.$emit('select', id);
    },
  },
  components: {
    WorkItem,
  },
};
</script>
