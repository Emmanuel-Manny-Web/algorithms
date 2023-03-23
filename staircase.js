function staircase(n) {
  // Write your code here
  let stair = ''
  let space = ''
  var num = n
  for(let i = 0; i < n; i++) {
    space += " "
  }
  for(let i = 0; i < n; i++) {
    stair += "#"
    if(i === ( n - 1)) {
      stair.trim()
      console.log(stair)
    } else {
      space = space.split(" ").filter((a, i) => i !== num - 1).join(" ")
      num -= 1
      console.log(space + stair)
    }
  }
  return
}