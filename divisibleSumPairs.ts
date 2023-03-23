function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  var pair: number = 0
  for(let i = 0; i < n; i++) {
    let list = ar.slice(i + 1)
    for(let j = 0; j < list.length; j++) {
      if((ar[i] + list[j]) % k === 0) pair++
    }
  }
  return pair
}
// console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))