// convert to array and reverse
function isPalindrome2(string) {
    if (string <= 1) return true
    return string === string.split('').reverse().join('')
}

// check first and last char recursively
function isPalindrome(string) {
    if (string === 1) return true
    if (string.length === 2) return string[0] === string[1]
    if (string[0] === string.slice(-1)) return isPalindrome(string.slice(1, -1))
    return false
}

console.log(isPalindrome('tacocat'))