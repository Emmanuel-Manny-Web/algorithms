function gridChallenge(grid) {
  // Write your code here
  var arranged = ''
  var column = ''
  grid.map((a, i) => grid[i] = a.split('').sort().join(''))
  console.log(grid)
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid.length; j++) {
      if(grid[j][i] === undefined) break
      column += grid[j][i]
    }
    console.log(column)
    arranged = column.split('').sort().join('')
    console.log(arranged)
    if(arranged !== column) return "NO"
    column = ''
  }
  return "YES"
}

// console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv']))