const getDays = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}

function dayOfProgrammer(year: number): string {
  // Write your code here
  var arr: number[] = []
  var dateString = ''
  if(year < 1918) {
    if(year % 4 === 0) {
      dateString = '12.09.' + year
    } else {
      dateString = '13.09.' + year
    }
  } else if(year > 1918) {
    for(let i = 1; i <= 8; i++) {
      var number: number = getDays(year, i)
      arr.push(number)
    }
    var sum: number = arr.reduce((a, b) => a + b)
    var day: number | string = 256 - sum
    day = day + ''
    var yr = year.toString()
    dateString = day + '.09.' + yr
  } else {
    for(let i = 1; i <= 8; i++) {
      var number: number = getDays(year, i)
      arr.push(number)
    }
    var sum: number = arr.reduce((a, b) => a + b)
    // In the year 1918 the 32nd day of the year in Russia is Feb 14th
    sum = sum - 13
    var day: number | string = 256 - sum
    day = day + ''
    var yr = year.toString()
    dateString = day + '.09.' + yr
  }
  return dateString
}
// console.log(dayOfProgrammer(1918))