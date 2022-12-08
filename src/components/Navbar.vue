<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <!-- Navbar content -->

  <ul class="nav nav-pills">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/gerichte">Menu</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about">About</router-link>
    </li>
  </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav-bar'
}
</script>

<style scoped>

</style>
