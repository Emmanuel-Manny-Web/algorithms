function viralAdvertising(n: number): number {
  var shared = 5
  var people = Math.floor(shared / 2)
  var likes: number[] = [people]
  for(let i = 2; i <= n; i++) {
    shared = people * 3
    people = Math.floor(shared / 2)
    likes.push(people)
  }
  return likes.reduce((a, b) => a + b)
}