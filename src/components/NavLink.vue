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
      background-color: $gray-color;
      li {
        a {
          text-decoration: none;
          display: block;
          padding: 15px 30px;
          background-color: $gray-color;
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
  <nav>
    <ul>
      <li><router-link :to="{name: 'root'}" exact>Top</router-link></li>
      <li><router-link :to="{name: 'works'}">Works</router-link></li>
      <li><router-link :to="{name: 'skill'}">Skill</router-link></li>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
      <li><router-link :to="{name: 'add'}">Add</router-link></li>
      <li><router-link :to="{name: 'login'}">Login</router-link></li>
    </ul>
  </nav>
</template>
