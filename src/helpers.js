import * as R from 'ramda'
import {solvedBoard} from './constants'

export const shuffleBoard = board => {
  const arr = [...board]
  for (let i = arr.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    const x = arr[index];
    arr[index] = arr[i];
    arr[i] = x;
  }
  return arr
}

export const areSwappable = (i1, i2) => Math.abs(i1 - i2) === 1 || Math.abs(i1 - i2) === 4

export const swap = (xs, i1, i2) => {
  const x1 = xs[i1]
  const x2 = xs[i2]
  xs = R.update(i1, x2, xs)
  xs = R.update(i2, x1, xs)
  return xs
}

export const isGameEnded = R.equals(solvedBoard)

export const formatTime = secs => {
  const minutes = Math.floor(secs / 60)
  const seconds = secs % 60

  return `${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
}
