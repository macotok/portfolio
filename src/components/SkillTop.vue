<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
  .skillBlock {
    margin-bottom: 2.5%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        @include skill(0 .5% .5% 0);
      }
    }
  }
</style>

<template>
  <div v-if="hasSkill" class="skillBlock">
    <ul>
      <li v-for="(skill, index) in this.skill" :key="index">
        {{skill.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    skill: Array,
  },
  computed: {
    hasSkill() {
      return this.skill.length !== 0;
    },
  },
};
</script>
