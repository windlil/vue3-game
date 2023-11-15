import { it, describe, expect } from 'vitest'
import { usePlayerStore } from '../../store/modules/player' 

it('player', () => {
  describe('player should be moved', () => {
    const { player, controlPlayer } = usePlayerStore()
    controlPlayer('right')
    expect(player.x).toBe(1)
  })
})