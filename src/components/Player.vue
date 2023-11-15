<script setup lang="ts">
import Player from '../assets/keeper.png'

const STEP = 50

const player = {
  x: 1,
  y: 1,
}

const position = {
  top: STEP * player.x + 'px',
  left: STEP * player.y + 'px',
}
</script>

<template>
  <div class="keeper box" :style="position">
    <img :src="Player" alt="">
  </div>
</template>

<style scoped lang="scss">
.keeper {
  position: absolute;
  top: 0;
  left: 0;
}
</style>