<template>
  <li>
    <a :href="'/work/' + work.id">
      <img :src="work.image_path" width="200" :alt="work.title" />
      <p>{{work.title}}</p>
      <ul>
        <li v-for="tag in work.tags">
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
