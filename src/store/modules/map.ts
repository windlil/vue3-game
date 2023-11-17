import { defineStore } from 'pinia'
import { initMap } from '../../game/map'

export const useMapStore = defineStore('mapStore', {
  state: () => ({
    map: initMap([
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 1, 2, 2, 3, 2, 1, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 1, 2, 2, 2, 2, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
    ])
  }),
})