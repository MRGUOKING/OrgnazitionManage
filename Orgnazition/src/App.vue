<template>
  <div id="app">
    <EmplyoeeHead/>
<!--    <Head v-show="$route.meta.noHead == null"/>-->
    <router-view/>
  </div>
</template>

<script>
import Head from "./components/Head";
import EmplyoeeHead from "./components/EmplyoeeHead";
export default {
  name: 'App',
  components:{
    Head,
    EmplyoeeHead
  }
}
</script>

<style>
</style>
