<template>
  <div class="home">
    <HelloWorld msg="Welcome to our restaurant"/>
    <img alt="Vue logo" src="../assets/rest1pic.jpg" style="max-width: 1920px; max-height: 1080px">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
