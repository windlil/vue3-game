import { usePlayerStore } from '../store/modules/player'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const STEP = 50

export function useMove() {
  const { controlPlayer } = usePlayerStore()

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
}

export function usePosition() {
  const playerStore = usePlayerStore()
  const { player } = storeToRefs(playerStore)
  const position = computed(() => {
    return {
      top: STEP * player.value.y + 'px',
      left: STEP * player.value.x + 'px',
    }
  })

  return position
}