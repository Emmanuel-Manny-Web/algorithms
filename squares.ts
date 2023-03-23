function squares(a: number, b: number): number {
  // Write your code here
  //First off, you get the square root of the starting and ending number and then subtract the lower from the higher, that will give you the number of square roots in that range excluding the starting number. You'll have to check if the starting number is also a perfect square and increment it by 1 if true
  var lower = Math.floor(Math.sqrt(a))
  var upper = Math.floor(Math.sqrt(b))
  var num = upper - lower
  if(Number.isInteger(Math.sqrt(a))) num += 1
  return num
}