function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
  // Write your code here
  var num = 0
  if(m1 === m2 && y1 === y2 && d1 !== d2 && d1 > d2) {
    num = (d1 - d2) * 15
  } else if(y1 === y2 && m1 !== m2 && m1 > m2) {
    num = (m1 - m2) * 500
  } else if(y1 !== y2 && y1 > y2) {
    num = 10000
  }
  return num
}
// console.log(libraryFine(6,6,2015, 9,6,2016))