/* My solution */
// function countingSort(arr) {
//   // Write your code here
//   var temp = []
//   var count = {}
//   for(let i = 0; i < 100; i++) {
//     count[arr[i]] = (count[arr[i]] || 0) + 1
//     temp.push(0)
//   }
//   for(let i = 0; i < arr.length; i++) {
//     Object.keys(count).map((a) => {
//       if(parseInt(a) === arr[i]) {
//         temp[a] = count[a]
//       }
//     })
//   }
//   return temp
// }
/* End of my solution */

/* Online solution */

function countingSort(arr) {
  var temp = new Array(100).fill(0)
  var t = 0
  for(let i = 0; i < arr.length; i++) {
    t = arr[i]
    temp[t]++
  }
  return temp
}