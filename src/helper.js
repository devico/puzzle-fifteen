const R = require('ramda')

exports.shuffleBoard = board => {
  let arr = [...board]  
  for (let i = arr.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * (i + 1));
    let x = arr[index];
    arr[index] = arr[i];
    arr[i] = x;
  }
  return arr
}

exports.areSwappable = (i1, i2) => Math.abs(i1 - i2) == 1 || Math.abs(i1 - i2) == 4

exports.swap = (xs, i1, i2) => {
  let x1 = xs[i1]
  let x2 = xs[i2]
  xs = R.update(i1, x2, xs)
  xs = R.update(i2, x1, xs)
  return xs
}