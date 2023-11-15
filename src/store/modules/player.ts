import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    player: {
      x: 0,
      y: 0
    }
  }),
  actions: {
    controlPlayer(target: 'left' | 'right' | 'up' | 'down') {
      switch(target) {
        case 'left':
          this.player.x -= 1
          break;
        case 'right':
          this.player.x += 1
          break;
        case 'up':
          this.player.y -= 1
          break;
        case 'down':
          this.player.y += 1
          break;
      }
    }
  }
})