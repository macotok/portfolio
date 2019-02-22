<style scoped lang="scss" >
.workBlock {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<template>
  <div>
    <div v-if="hasWork" class="workBlock">
      <ul>
        <work-item
          v-for="(work, index) in filteredWorks" :key="index"
          :work="work"
          @select="select"
        >
        </work-item>
      </ul>
    </div>
    <div v-else>
      {{nonWorksData}}
    </div>
  </div>
</template>

<script>
import WorkItem from './Item';
import { NON_WORKS_DATA } from '../../defines/';

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
