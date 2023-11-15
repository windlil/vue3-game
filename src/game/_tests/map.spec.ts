import { it, describe, expect } from 'vitest'
import { Empty, Wall, Floor, Cargo } from '../element/index'
import { initMap } from '../map'

it('map', () => {
  describe('initMap', () => {
    const map = initMap([[0, 1, 2, 3]])
    expect(map).equal([[new Empty(), new Wall(), new Floor(), new Cargo()]])
  })
})