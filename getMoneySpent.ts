function getMoneySpent(keyboards: number[], drives: number[], b: number) {
  var max = Math.max(keyboards.length, drives.length)
  var min = Math.min(keyboards.length, drives.length)
  var maxValue = 0
  var arr
  var list
  if(max !== min) {
    arr = keyboards.length === max ? keyboards : drives
    list = keyboards.length === min ? keyboards : drives
  } else {
    arr = keyboards
    list = drives
  }
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < list.length; j++) {
      var num = arr[i] + list[j]
      if(num <= b) maxValue = num > maxValue ? num : maxValue
    }
  }
  if(maxValue > 0) return maxValue
  else return -1
}
// console.log(getMoneySpent([3,1],[5,2,8], 10))