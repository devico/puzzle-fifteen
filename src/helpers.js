import * as R from 'ramda'
import {solvedBoard} from './constants'

export let shuffleBoard = board => {
  let arr = [...board]  
  for (let i = arr.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1));
    let x = arr[index];
    arr[index] = arr[i];
    arr[i] = x;
  }
  return arr
}

export let areSwappable = (i1, i2) => Math.abs(i1 - i2) == 1 || Math.abs(i1 - i2) == 4

export let swap = (xs, i1, i2) => {
  let x1 = xs[i1]
  let x2 = xs[i2]
  xs = R.update(i1, x2, xs)
  xs = R.update(i2, x1, xs) 
  return xs
}

export let isGameEnded = R.equals(solvedBoard)

export let formatTime = secs => {
  let minutes = Math.floor(secs / 60)
  let seconds = secs % 60

  return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`
}