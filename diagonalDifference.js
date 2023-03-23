function diagonalDifference(arr) {
  // Write your code here
  var firstDiagonal = 0
  var secondDiagonal = 0
  var num = arr.length - 1
  var start = 0
  for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
          firstDiagonal += arr[i][start]
          secondDiagonal += arr[i][num]
          num = num - 1
          start += 1
          break;
      }
  }
  if(firstDiagonal > secondDiagonal) {
      return firstDiagonal - secondDiagonal
  } else return secondDiagonal - firstDiagonal
}