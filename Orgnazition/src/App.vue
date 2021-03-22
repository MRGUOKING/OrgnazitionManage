<template>
  <div id="app">
    <Head v-show="$route.meta.noHead == null"/>
    <router-view/>
  </div>
</template>

<script>
import Head from "./components/Head";
export default {
  name: 'App',
  components:{
    Head,
  }
}
</script>

<style>
</style>
