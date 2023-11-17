import { defineStore } from 'pinia'
import { useMapStore } from './map'

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    player: {
      x: 2,
      y: 2
    }
  }),
  actions: {
    controlPlayer(target: 'left' | 'right' | 'up' | 'down') {
      const { map } = useMapStore()
      let isWall = false

      switch(target) {
        case 'left':
          isWall = map[this.player.y][this.player.x - 1].name === 'Wall'
          if (isWall) return
          this.player.x -= 1
          break;
        case 'right':
          isWall = map[this.player.y][this.player.x + 1].name === 'Wall'
          if (isWall) return
          this.player.x += 1
          break;
        case 'up':
          isWall = map[this.player.y - 1][this.player.x].name === 'Wall'
          if (isWall) return
          this.player.y -= 1
          break;
        case 'down':
          isWall = map[this.player.y + 1][this.player.x].name === 'Wall'
          if (isWall) return
          this.player.y += 1
          break;
      }
    }
  }
})