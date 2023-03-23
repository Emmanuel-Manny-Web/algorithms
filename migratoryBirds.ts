function migratoryBirds(arr: number[]): number {
  // Write your code here
  let dict: any = {}
  for(let i = 0; i < arr.length; i++) {
    let key = arr[i]
    dict[key] = dict[key] ? dict[key] + 1 : 1
  }
  let max = 0
  for(const i in dict) {
    if(dict[i] > max) max = dict[i]
  }
  let list = Object.keys(dict).filter((a) => dict[a] === max).map((a) => parseInt(a))
  return Math.min(...list)
}

// console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))