function altString(ops: string[]) {
  let record: number[] = []
  for(let i = 0; i < ops.length; i++) {
    let char = ops[i]
    if(char == 'D') {
      let value = record[record.length - 1]
      value = 2 * value
      record.push(value)
    } else if(char === 'C') {
      let value = record[record.length - 1]
      record = record.filter((a) => a !== value) 
    } else if(char === '+') {
      let num1 = record[record.length - 1]
      let num2 = record[record.length - 2]
      let sum = num1 + num2
      record.push(sum)
    } else {
      let num = parseInt(char)
      record.push(num)
    }
  }
  return record.reduce((a, b) => a + b)
}

const arr = ["5","2","C","D","+"]
// console.log(altString(arr))