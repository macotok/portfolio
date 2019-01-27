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
  <div>
    <div v-if="page === 'top'">
      <div v-if="hasSkill" class="skillBlock">
        <ul>
          <li v-for="(skill, index) in this.skill" :key="index">
            {{skill.title}}
          </li>
        </ul>
      </div>
      <div v-else>
        表示するSkillがありません。
      </div>
    </div>
    <div v-else-if="page === 'list'">
      <div v-if="hasSkill" class="skillList">
        <table class="m-table-01">
          <tr v-for="(skill, index) in this.skill" :key="index">
            <th>
              <img :src="skill.image_path" width="75" :alt="skill.title">
            </th>
            <td>
              {{skill.text}}
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        表示するSkillがありません。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: Array,
    page: String,
  },
  computed: {
    hasSkill() {
      return this.skill.length !== 0;
    },
  },
};
</script>
