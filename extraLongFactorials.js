//My function printed it out in a scientific notation it is supposed to return the actual number
// function extraLongFactorials(n) {
//   // Write your code here
//   var arr = Array(n).fill().map((a,i) => i + 1)
//   var total = arr.reduce((a, b) => a * b)
//   console.log(Number(total))
//   return
// }
// console.log(extraLongFactorials(25))

function extraLongFactorials(n) {
  // Write your code here
  console.log(BigInt(Array.from(Array(n),(_,i)=>BigInt(i+1)).reduce((a,b)=>BigInt(a)*BigInt(b))).toString());
  return
}