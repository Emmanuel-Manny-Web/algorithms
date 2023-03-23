function pickingNumbers(a: number[]): number {
  var arr = a.sort((a, b) => a - b)
  var list: number[] = []
  var val: number = 0
  if(arr.every((a) => a === arr[val])) return arr.length
  for(let i = 0; i < arr.length; i++) {
    var current = arr[i]
    for(let j = val; j < arr.length; j++) {
      if((arr[j] - current) > 1) {
        var temp = arr.slice(i, j)
        val = j
        list.push(temp.length)
        break
      }
    }
  }
  return Math.max(...list)
}
// var list = Array(100).fill(66)
// console.log(pickingNumbers(list))
// console.log(pickingNumbers([1,3,3,4,5,6]))