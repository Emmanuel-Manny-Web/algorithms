function caesarCipher(s, k) {
  // Write your code here
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var cipher = ''
  var position = 0
  for(let i = 0; i < s.length; i++) {
    let char = s[i]
    if(!(/^[a-zA-Z]+$/).test(char)) {
      cipher += char
      continue
    }
    if(uppercase.includes(char)) {
      position = uppercase.indexOf(char) + k
      if(position > 25) {
        while(position > 25) {
          position = position - 26
        }
        cipher += uppercase[position]
      } else cipher += uppercase[position]
    } else {
      position = lowercase.indexOf(char) + k
      if(position > 25) {
        while(position > 25) {
          position = position - 26
        }
        cipher += lowercase[position]
      } else cipher += lowercase[position]
    }
  }
  return cipher
}
// console.log(caesarCipher('1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M', 27))