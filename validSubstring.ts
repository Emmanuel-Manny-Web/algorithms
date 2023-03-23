function validSubstring(k: string) {
  var result: number[][] = []
  for(let i = 0; i < k.length; i++) {
    var current = k[i]
    var next = i + 2
    var val = k[next]
    if(current === val) {
      while(val === current) {
        next += 1
        val = k[next]
      }
      var arr = [i, next - 1]
      result.push(arr)
      i = next - 1
    }
  }
  return result
}
// console.log(validSubstring('abcdddeeeeaabbbcd'))