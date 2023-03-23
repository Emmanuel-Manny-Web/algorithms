function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
  var arr: number[] = []
  var result: number[] = []
  var dict: Record<string, number> = {}
  for (let i = 0; i < a.length; i++) {
    var pos = i + k
    while(pos > a.length - 1) {
      pos = pos - a.length
    }
    dict[pos] = a[i]
  }
  Object.keys(dict).map((val: any, i) => {
    arr[val] = dict[val]
  })
  queries.forEach((val) => {
    var pos = arr[val]
    result.push(pos)
  })
  return result
}
// console.log(circularArrayRotation([3,4,5], 10000, [1,2]))