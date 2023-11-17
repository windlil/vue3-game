<script setup lang="ts">
import Player from '../assets/keeper.png'
import { useMove, usePosition } from '../game/player'

const position = usePosition()
useMove()

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