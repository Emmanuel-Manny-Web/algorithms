// my original function takes too long
// function climbingLeaderboard(ranked: number[], player: number[]) {
//   // Write your code here
//   var list: number[] = []
//   var pos: number[] = []
//   var temp: number[] = []
//   for(let i = 0; i < player.length; i++) {
//     var current = player[i]
//     temp = ranked.concat(current).sort((a, b) => a - b).reverse()
//     pos = [... new Set(temp)]
//     var position = pos.indexOf(current) + 1
//     list.push(position)
//     ranked = temp
//   }
//   return list
// }

/* */

// Youtube code that works
function climbingLeaderboard(ranked: number[], player: number[]) {
  // Write your code here
  var result: number[] = []
  var arr = [...new Set(ranked)]
  let res = arr.length - 1
  for(const score of player) {
    while(res >= 0) {
      if(score >= arr[res]) {
        res--
      }
      else {
        result.push(res + 2)
        break
      }
    }
    if(res < 0) result.push(1)
  }
  return result
}

// console.log(climbingLeaderboard([100,90,90,80], [70, 80, 105]))