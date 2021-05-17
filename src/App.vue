<template>
  <div id="app">
    <ul>
      <li v-for="route in $router.options.routes" :key="route.name">
        <router-link v-if="route.name !== 'product'" :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
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

a {
  text-decoration: none;
}

ul li .router-link-exact-active {
  color: blue;
}

ul {
  list-style: none;
}
</style>
