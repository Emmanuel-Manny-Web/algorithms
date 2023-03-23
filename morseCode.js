function morsecode(code) {
  var next = 0
  var prev = 0
  var arr = code.split('')
  var options = []
  for(let i = 0; i < code.length; i++) {
    next = i + 1
    if(code[i] === '.' && code[next] === '.') {
      if(i > 0) {
        prev = i - 1
        var s = ''
        while(prev >= 0) {
          s += arr[prev]
          prev--
        }
        var start = arr.slice(i, next + 1).map((a, i) => a.replace('.', '-')).join('')
        var end = arr.slice(next + 1).join('')
        var word = s + start + end
        options.push(word)
      } else {    
        var start = arr.slice(i, next + 1).map((a, i) => a.replace('.', '-')).join('')
        var end = arr.slice(next + 1).join('')
        var word = start + end
        options.push(word)
      }
    }
  }
  return options
}