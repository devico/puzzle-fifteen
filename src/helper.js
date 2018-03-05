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