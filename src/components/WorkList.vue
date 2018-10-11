<template>
  <div>
    <div v-if="hasWork">
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
      表示する作品がありません
    </div>
  </div>
</template>

<script>
import WorkItem from './WorkItem';

export default {
  props: {
    works: Array,
    count: Number,
  },
  computed: {
    hasWork() {
      return this.filteredWorks && this.filteredWorks.length !== 0;
    },
    filteredWorks() {
      let works = this.works.concat();
      if (this.count) {
        works = works.splice(0, this.count);
      }
      return works;
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
