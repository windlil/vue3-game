<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
</script>

<template>
  <div class="game">
    <Map></Map>
    <Player></Player>
  </div>
</template>

<style scoped lang="scss">
.game {
  position: relative;
}
</style>