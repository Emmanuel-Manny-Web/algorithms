function minimumBribes(q) {
  // Write your code here
  var bribes = 0, i, j;
  for (i = 0; i < q.length; i++) {
    const pos = q[i], at = i + 1;
    if (pos - at > 2) return console.log("Too chaotic")
    for (j = pos - 2; j < i; j++) {
      if (q[j] > pos) { bribes++ }
    }
  }
  return console.log(bribes);
}
// minimumBribes([1,2,5,3,7,8,6,4])