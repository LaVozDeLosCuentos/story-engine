<template>
  <div class="scene-basic">
    <Background />
    <Character />
  </div>
</template>

<script setup>
  import Character from '../Character.vue'
  import Background from '../Background.vue'
</script>

<style>
  .scene-basic {
    color: white;
  }
</style>
