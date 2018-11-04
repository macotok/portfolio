<style scoped lang="scss">
</style>

<template>
  <div>
    <title-block :title=data.title></title-block>
    <div class="image"><img :src="data.image_path" :alt="data.title"></div>
    <ul>
      <li v-for="(tag, index) in data.tags" :key="index">
        {{tag}}
      </li>
    </ul>
    <p>{{data.text}}</p>
  </div>
</template>

<script>
import TitleBlock from './TitleBlock';

export default {
  props: {
    data: Object,
  },
  components: {
    TitleBlock,
  },
};
</script>
