function pageCount(n: number, p: number): number {
  // Write your code here
  var flip: number = 0
  var arr: number[] = []
  for(let i = 1; i <= p; i++) {
    if(p >= 2) {
      if(i % 2 === 0) flip += 1
    } else {
      break;
    }
  }
  arr.push(flip)
  flip = 0
  for(let i = n; i > p; i--) {
    if(n !== p){
      if(i % 2 === 0) flip += 1
    } else {
      flip = 0
      break
    }
  }
  arr.push(flip)
  return Math.min(...arr)
}
// console.log(pageCount(4,4))