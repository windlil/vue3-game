<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Player from '../assets/keeper.png'
import { usePlayerStore } from '../store/modules/player'
import { computed } from 'vue';

const STEP = 50

const playerStore = usePlayerStore()
const { player } = storeToRefs(playerStore)

function controlPlayer(target: 'left' | 'right' | 'up' | 'down') {
  switch(target) {
    case 'left':
      player.value.x -= 1
      break;
    case 'right':
      player.value.x += 1
      break;
    case 'up':
      player.value.y -= 1
      break;
    case 'down':
      player.value.y += 1
      break;
  }
}

window.addEventListener('keyup', (e: KeyboardEvent) => {
  const code = e.code

  switch(code) {
    case 'ArrowLeft':
      controlPlayer('left')
      break;
    case 'ArrowRight':
      controlPlayer('right')
      break;
    case 'ArrowUp':
      controlPlayer('up')
      break;
    case 'ArrowDown':
      controlPlayer('down')
      break;
  }
})

const position = computed(() => {
  return {
    top: STEP * player.value.y + 'px',
    left: STEP * player.value.x + 'px',
  }
})
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