<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">ГИС СРН</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/gilec" class="nav-link">Реестр</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Добавить</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import GilecList from './components/GilecList.vue';

export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
