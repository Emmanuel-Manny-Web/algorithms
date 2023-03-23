function beautifulDays(i: number, j: number, k: number): number {
  var arr:number = 0
  for(let val = i; val <= j; val++) {
    var reverse = val.toString().split('').reverse().join('')
    var num = parseInt(reverse)
    if(((val - num) % k) === 0) {
      arr += 1
    }
  }
  return arr
}