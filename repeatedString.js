function repeatedString(str) {
  var highestNumber = 0;
  var highestChar = null
  var obj = {}
  for(let i = 0; i < str.length; i++) {
    if(!(/^[A-Za-z]+$/).test(str[i])) continue;
    console.log(str[i])
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1
    if(obj[str[i]] > highestNumber) {
      highestNumber = obj[str[i]]
      highestChar = str[i]
    }
  }
  return highestChar
}
// console.log(repeatedString('aAAc111dBBB'))
// console.log((/^[A-Za-z]+$/).test('1'))