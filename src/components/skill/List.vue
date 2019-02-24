<style scoped lang="scss">
  @import "../../assets/sass/styles";
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
        {{nonSkillData}}
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
              <nl2br tag="p" :text="skill.text" />
              <div v-if="isAdmin" class="m-buttonBlock-01">
                <edit-button
                  text="編集"
                  :editId="skill.id"
                  type="skill"
                >
                </edit-button>
                <delete-button
                  text="削除"
                  eventName="openModal"
                  @openModal="openModal"
                  :id="skill.id"
                  :title="skill.title"
                >
                </delete-button>
              </div>
            </td>
          </tr>
        </table>
        <delete-permission
          :deleteTitle="title"
          type="skill"
          :deleteId="id"
          commitName="removeSkill"
        >
        </delete-permission>
      </div>
      <div v-else>
        {{nonSkillData}}
      </div>
    </div>
  </div>
</template>

<script>
import Nl2br from 'vue-nl2br';
import EditButton from '../button/Edit';
import DeleteButton from '../button/Delete';
import DeletePermission from '../modal/DeletePermission';
import { NON_SKILL_DATA } from '../../defines/';

export default {
  data() {
    return {
      id: '',
      title: '',
    };
  },
  props: {
    skill: Array,
    page: String,
  },
  computed: {
    hasSkill() {
      return this.skill.length !== 0;
    },
    nonSkillData() {
      return NON_SKILL_DATA;
    },
    isAdmin() {
      return this.$store.state.admin;
    },
  },
  methods: {
    openModal(eventTarget) {
      this.id = eventTarget.dataset.id;
      this.title = eventTarget.dataset.title;
      this.$modal.show('deletePermission');
    },
  },
  components: {
    EditButton,
    DeleteButton,
    DeletePermission,
    Nl2br,
  },
};
</script>
