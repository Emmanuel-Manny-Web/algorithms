function morseCode(code: string) {
  var result: string[] = []
  var str = ''
  for(let i = 0; i < code.length; i++) {
    var current = code[i]
    var next = code[i + 1]
    var prev = 0
    str = ''
    if(current === '.' && next === '.') {
      var join = code.split('').slice(i + 2).join('')
      while(i > 0 && prev < i) {
        str += code[prev]
        prev++
      }
      var word = str + "--" + join
      result.push(word)
    }
  }
  return result
}
// console.log(morseCode('..-.'))