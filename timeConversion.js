function timeConversion(s) {
  // Write your code here
  var arr = s.split(":")
  var hour = arr[0]
  var minute = arr[1]
  var seconds = arr[2].split("").filter((a, i) => i <= 1).join('')
  console.log(seconds)
  if(arr[2].includes("PM")) {
    switch(hour) {
      case '12':
        hour = '12'
        break
      case '01':
        hour = '13'
        break
      case '02':
        hour = '14'
        break
      case '03':
        hour = '15'
        break
      case '04':
        hour = '16'
        break
      case '05':
        hour = '17'
        break
      case '06':
        hour = '18'
        break
      case '07':
        hour = '19'
        break
      case '08':
        hour = '20'
        break
      case '09':
        hour = '21'
        break
      case '10':
        hour = '22'
        break
      case '11':
        hour = '23'
        break
      default: 
        hour = "No time"
    }
  } else {
    switch(hour) {
      case "12":
        hour = "00"
        break
      default:
        hour = hour
    }
  }
  return hour + ":" + minute + ":" + seconds
}

// console.log(timeConversion("04:59:59AM"))