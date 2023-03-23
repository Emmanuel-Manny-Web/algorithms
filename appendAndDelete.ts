function appendAndDelete(s: string, t: string, k: number): string {
  // Write your code here
  if(t.length === s.length && k >= (t.length * 2) + 1) return "Yes"
  var arr = t.split('')
  var times = 0
  for(let i = 0; i < t.length; i++) {
    if(t[i] === s[i]) {
      times += 1
    } else {
      break
    }
  }
  var remaining = t.length - times
  var diff = s.length > times ? s.length - times : times - s.length
  if(t.split('').every((a) => a === t[0]) && s.split('').every((a) => a === t[0])) {
    if(k > remaining) return 'Yes'
  }
  if(remaining <= diff && k >= (diff + remaining)) return "Yes"
  if(diff === 0 && k >= remaining) return "Yes"
  return 'No'
}