var closestToZero = (ts: number[]) => {
  var small: number = ts[0]
  ts.map((a) => {
    if(Math.sign(a) === -1) {
      if(small < a) small = a
    } else {
      if(small > a) small = a
    }
  })
  let pos: number = ts.length === 2 ? small * (-1) : small
  if(ts.indexOf(pos) === 1) return pos
  else return small
}
let array = [-1, 4, 5,-8, 6, 20]
// console.log(closestToZero(array))