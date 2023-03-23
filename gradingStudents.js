function gradingStudents(grades) {
  var arr = []
  var num = 0
  for(let i = 0; i < grades.length; i++) {
    if(grades[i] < 38) {
      arr.push(grades[i])
      continue
    }
    num = grades[i] + 1
    while(num % 5 !== 0) {
      num += 1
    }
    var val = num - grades[i] >= 3 ? grades[i] : num
    arr.push(val)
  }
  return arr
}

console.log(gradingStudents([73,67,38,33]))