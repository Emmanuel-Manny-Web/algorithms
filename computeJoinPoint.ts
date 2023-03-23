const computeJoinPoint = (s1: number, s2: number) => {
  let num1: string = String(s1)
  let num2: string = String(s2)
  let sum1: number = 0
  let sum2: number = 0
  for(let i = 0; i < num1.length; i++) {
    sum1 += parseInt(num1[i])
  }
  for(let i = 0; i < num2.length; i++) {
    sum2 += parseInt(num2[i])
  }
  s1 = sum1 + s1
  s2 = sum2 + s2
  if(s1 === s2) {
    return s1 
  }
  computeJoinPoint(s1, s2)
}
// console.log(computeJoinPoint(57, 63))