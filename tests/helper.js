import {shuffleBoard, areSwappable, swap, isGameEnded, formatTime} from '../src/helpers'
import { solvedBoard } from '../src/constants'
import test from 'ava';

test('isGameEnded()', t => {
  const board = [1, 2, 3, 13, 5, 6, 7, 8, 9, 4, 11, 12, 10, 14, 15, null]
  t.pass(isGameEnded(solvedBoard))
  t.pass(!isGameEnded(board))
});

test('swap()', t => {
  const board = [15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, null]
  t.deepEqual(swap(solvedBoard, 0, 14), board)
});

test('shuffleBoard()', t => {
  t.notDeepEqual(shuffleBoard(solvedBoard), solvedBoard)
});

test('areSwappable()', t => {
  t.true(areSwappable(solvedBoard[5], solvedBoard[4]))
  t.true(areSwappable(solvedBoard[5], solvedBoard[1]))
  t.falsy(areSwappable(solvedBoard[5], solvedBoard[2]))
});

test('formatTime()', t => {
  t.is(formatTime(73), '01:13')
});