function sockMerchant(n: number, ar: number[]): number {
  // Write your code here
  var dict: any = {}
  var arr: number[] = []
  for(let i = 0; i < ar.length; i++) {
    dict[ar[i]] = dict[ar[i]] ? dict[ar[i]] + 1 : 1
  }
  Object.keys(dict).map((a) => {
    var num: number = Math.floor(dict[a] / 2)
    arr.push(num)
  })
  return arr.reduce((a, b) => a + b)
}
// console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))