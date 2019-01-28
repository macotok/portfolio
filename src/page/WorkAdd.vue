<template>
  <div>
    <title-block title="Work Add"></title-block>
    <work-add @workAdd="add"></work-add>
  </div>
</template>

<script>
import TitleBlock from '../components/TitleBlock';
import WorkAdd from '../components/WorkAdd';

export default {
  methods: {
    add(data) {
      this.$store.commit('addWork', data);
      this.$router.push({ name: 'root' });
    },
  },
  components: {
    TitleBlock,
    WorkAdd,
  },
};
</script>
