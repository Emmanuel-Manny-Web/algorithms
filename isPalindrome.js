function isPalindrome(word) {
  var nword = ""
  for(let i = word.length-1; i >= 0; i--) {
    nword += word[i]
  }
  if(word === nword) return true
  else return false
}
// console.log(isPalindrome("dad"))