<style scoped lang="scss">
  @import "../assets/sass/styles.scss";
 .router-link-active {
   text-decoration: none;
   pointer-events: none;
   color: $key-color;
 }
  nav {
    padding: 20px 0;
    ul {
      display: flex;
      justify-content: center;
      li {
        padding-right: 30px;
        &:last-child {
          padding-right: 0;
        }
        a {
          color: $link-color;
          &:hover {
            text-decoration: none;
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
      <li><router-link :to="{name: 'list'}">List</router-link></li>
      <li><router-link :to="{name: 'skill'}">Skill</router-link></li>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
      <li><router-link :to="{name: 'add'}">Add</router-link></li>
      <li><router-link :to="{name: 'login'}">Login</router-link></li>
    </ul>
  </nav>
</template>
