function mulBase(num, base) {
  var arr = []
  while(num > 0) {
    arr.push(num % base)
    num = Math.floor(num / base)
  }
  return arr.reverse().join("")
}
// console.log(mulBase(100, 2))