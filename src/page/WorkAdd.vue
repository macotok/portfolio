<template>
  <div>
    <title-block title="Work Add"></title-block>
    <work-editor @workAdd="add"></work-editor>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import WorkEditor from '../components/WorkEditor';

export default {
  methods: {
    workAdd(data) {
      this.$store.commit('addWork', data);
      this.$router.push({ name: 'root' });
    },
  },
  components: {
    TitleBlock,
    WorkEditor,
  },
};
</script>
