function evenSubset(k: number[]): number {
  var number = k.length;
  var even: number[] = []
  var total = 0
  for(let i = 1; i < k.length; i++) if(i % 2 === 0) even.push(i)
  if(k.length % 2 === 0) total = k.reduce((a, b) => a + b)
  for(let i = 0; i < even.length; i++) {
    var number = even[i]
    for(let j = 0; j < k.length; j++) {
      var arr = k.slice(j, j + number)
      if(arr.length % 2 === 0 && arr.length === number) {
        total += arr.reduce((a, b) => a + b)
      }
    }
  }
  return total
}
// console.log(evenSubset([1,4,2,5,6]))