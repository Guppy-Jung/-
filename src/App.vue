<template>
  <div id="app">
    <router-view></router-view>
    <!-- <index></index>
    <list></list> -->
    
  </div>
</template>

<script>
import Index from "./components/index"
import List from "./components/list"
import Register from "./components/register"

export default {
  name: 'App',
  components: {
    Index,
    List,
    Register,
  }
}
</script>

<style>

</style>
