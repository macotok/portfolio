<style scoped lang="scss">
li {
  width: 18%;
  margin-right: 2.5%;
  &:last-child {
    margin-right: 0;
  }
}
</style>

<template>
  <li>
    <a :href="'/work/' + work.id">
      <img :src="work.image_path" width="200" :alt="work.title" />
      <p>{{work.title}}</p>
      <ul>
        <li v-for="(tag, index) in work.tags" :key="index">
          {{tag}}
        </li>
      </ul>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    work: Object,
  },
  methods: {
    select(id) {
      this.$emit('select', id);
    },
  },
};
</script>
