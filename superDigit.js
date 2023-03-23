function superDigit(n, k) {
  // Write your code here
  var a = ''
  for(let i = 1; i < k; i++) {
    a += n
  }
  n += a
  return recursiveSplit(n)
}

function recursiveSplit(s) {
  var arr = s.split('')
  var num = 0
  for(let i = 0; i < arr.length; i++) {
    num += parseInt(arr[i])
  }
  var str = num.toString()
  if(str.length > 1) {
    return recursiveSplit(str)
  } else return num
}

// console.log(superDigit("9875", 4))
