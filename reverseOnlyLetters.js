function reverseOnlyLetters(s) {
  var arr = s.split('')
  var wordList = arr.filter((a) => (/^[a-zA-Z]+$/).test(a)).reverse()
  arr.forEach((a, i) => {
    if(!(/^[a-zA-Z]+$/).test(a)) {
      wordList.splice(i, 0, a)
    }
  })
  return wordList.join('')
}
console.log(reverseOnlyLetters("a-bC-dEf=ghlj!!"))