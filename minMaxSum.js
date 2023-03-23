// min max sum of array of five positive integers. Sum the first four of the five and find the maximum sum and minimum sum of four elements in the array

function miniMaxSum(arr) {
  // Write your code here
  let max = 0
  let min = 0
  let sum = 0
  arr.map((a, i) => {
    sum = arr.filter((b) => b !== a).reduce((c,d) => c + d)
    max = sum > max ? sum : max
    min = min === 0 || sum < min ? sum : min
  })
  return console.log(min + " " + max)
}
var barr = [1,2,3,4]
console.log(barr.splice(1).reduce((a,b) => a + b))
// console.log(miniMaxSum([5,5,5,5,5]))
