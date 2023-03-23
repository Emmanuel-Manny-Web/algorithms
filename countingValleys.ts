function countingValleys(steps: number, path: string): number {
  // Write your code here
  var sea: number = 0
  var away : number = 0
  var valley: number = 0
  var prev: number = 0
  for(let i = 0; i < steps; i++) {
    if(path[i] === 'U') {
      away += 1
      prev = away - 1
    } else {
      away -= 1
      prev = away + 1
    }
    if(sea === away && Math.sign(prev) === -1) valley += 1
  }
  return valley
}
// console.log(countingValleys(10, 'UDDDUDUDUU'))