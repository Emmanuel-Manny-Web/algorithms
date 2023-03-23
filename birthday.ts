function birthday(s: number[], d: number, m: number): number {
  // Write your code here
  var num: number = 0
  for(let i = 0; i < s.length; i++) {
    var list = s.slice(i, i + m).reduce((a, b) => a + b)
    if(list === d) num++
  }
  return num
}
// console.log(birthday([4], 4, 1))