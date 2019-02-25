<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
 .router-link-active {
   text-decoration: none;
   pointer-events: none;
   color: $white-color;
   background-color: $key-color;
 }
  nav {
    ul {
      display: flex;
      justify-content: center;
      background-color: $gray-color-01;
      li {
        a {
          text-decoration: none;
          display: block;
          padding: 15px 30px;
          background-color: $gray-color-01;
          &:hover {
            color: $white-color;
            background-color: $key-color;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="m-nav-01">
    <nav>
      <ul>
        <li><router-link :to="{name: 'root'}" exact>Top</router-link></li>
        <li><router-link :to="{name: 'works'}">Works</router-link></li>
        <li><router-link :to="{name: 'skills'}">Skills</router-link></li>
        <li><router-link :to="{name: 'profile'}">Profile</router-link></li>
        <li v-if="isAdmin"><router-link :to="{name: 'addWork'}">add Work</router-link></li>
        <li v-if="isAdmin"><router-link :to="{name: 'addSkill'}">add Skill</router-link></li>
        <li v-if="isAdmin"><router-link :to="{name: 'admin'}">Admin</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isAdmin() {
      return this.$store.state.admin;
    },
  },
};
</script>
