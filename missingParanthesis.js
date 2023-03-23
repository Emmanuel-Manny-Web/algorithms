function missingParanthesis(expression) {
  var arr = expression.split('')
  var index1 = arr.indexOf('(')
  var index2 = arr.indexOf(')')
  if(index1 !== -1 && index2 !== -1) {
    let array = arr.filter((a, i) => i !== index1 && i !== index2)
    let arth = array.join("")
    index1 = array.indexOf('(')
    index2 = array.indexOf(')')
    missingParanthesis(arth)
  }
  if(index1 !== -1 && index2 == -1) return expression.length
  if(index1 == -1 && index2 !== -1) return 1
}
let expression = '24*3*4 * 3)*()'
// console.log(missingParanthesis(expression))