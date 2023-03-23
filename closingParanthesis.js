const closingParenthesis = (str) => {
  let array = str.split('')
  const obj = {}
  let first = 0
  let second = 0
  if(array.includes('{') || array.includes('}')) {
    first = array.indexOf('{')
    second = array.indexOf('}')
    obj["curl"] = (first < second) && (first % 2 === 0 && second % 2 === 1 || first % 2 === 1 && second % 2 === 0) ? true : false
  } if (array.includes('[') || array.includes(']')) {
    first = array.indexOf('[')
    second = array.indexOf(']')
    obj["sq"] = (first < second) && (first % 2 === 0 && second % 2 === 1 || first % 2 === 1 && second % 2 === 0) ? true : false
  } if(array.includes('(') || array.includes(')')) {
    first = array.indexOf('(')
    second = array.indexOf(')')
    obj["para"] = (first < second) && (first % 2 === 0 && second % 2 === 1 || first % 2 === 1 && second % 2 === 0) ? true : false
  }
  return Object.keys(obj).every((a) => obj[a] === true)
}

const string = '{()}'
// console.log(closingParenthesis(string))