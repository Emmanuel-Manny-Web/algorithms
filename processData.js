function processData(input) {
  //Enter your code here
  let arr = input.sort((a, b) => a - b)
  let mid = Math.floor(input.length / 2)
  let list = arr.slice(mid).reverse()
  arr = arr.slice(0, mid)
  console.log(arr.concat(list))
  return
}

// console.log(processData([1,2,3,4,5,6,7]))
const arr = (start, end) => Array(end).fill().map((a, i) => start + i)
// console.log(arr(1, 7))
