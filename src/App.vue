<template>
  <div id="app">
    <BasicScene />
  </div>
</template>

<script setup>
  import BasicScene from './components/Scene/Basic.vue'
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  #app {
    width: 1792px;
    height: 1024px;
    background-color: black;
    position: relative;
  }
</style>
