import expect from 'expect'
import {shuffleBoard, areSwappable, swap, isGameEnded, formatTime} from './helpers'

describe('check endGame', () => {
  it('board equals initial board', () => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]
    const actual = isGameEnded(board)
    expect(actual).toEqual(true)
  })

  it('board not equals initial board', () => {
    const board = [1, 2, 3, 13, 5, 6, 7, 8, 9, 4, 11, 12, 10, 14, 15, null]
    const actual = isGameEnded(board)
    expect(actual).toEqual(false)
  })
})
