function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  var arr = bill.filter((_, i) => i !== k)
  var sum = arr.reduce((a, b) => a + b) / 2
  if(sum === b) console.log("Bon Appetit")
  else console.log(b - sum)
  return
}
// console.log(bonAppetit([2,4,6], 2, 6))