<template>
  <div id="app">
    <EmplyoeeHead/>
<!--    <SystemMana ge v-show="$route.meta.noHead  == null"/>-->
<!--    <Head v-show="$route.meta.noHead == null"/>-->
    <router-view/>
  </div>
</template>

<script>
import Head from "./components/Head";
import EmplyoeeHead from "./components/EmplyoeeHead";
import SystemManage from "./components/SystemManage";
export default {
  name: 'App',
  components:{
    Head,
    EmplyoeeHead,
    SystemManage
  }
}
</script>

<style>
</style>
