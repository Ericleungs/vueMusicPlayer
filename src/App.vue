<template>
  <div id="app">
    <top></top>
    <index></index>
  </div>
</template>

<script>
import top from '@/components/topbar';
import index from '@/components/index';
export default {
  name: 'App',
  components:{
    top,
    index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
