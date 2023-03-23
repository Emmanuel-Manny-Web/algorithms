function towerBreakers(n, m) {
  // Write your code here
  if(m === 1) {
    return 2
  } else if(n % 2 === 0 && m !== 1) {
    return 2
  } else if(n % 2 === 1 && m !== 1) {
    return 1
  }
}