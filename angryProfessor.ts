function angryProfessor(k: number, a: number[]): string {
  var early: number = 0
  for(const time of a) {
    early = Math.sign(time) <= 0 ? early += 1 : early
  }
  if(early >= k) return "NO"
  else return "YES"
}