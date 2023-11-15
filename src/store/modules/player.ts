import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('playerStore', {
  state: () => ({
    player: {
      x: 0,
      y: 0
    }
  })
})