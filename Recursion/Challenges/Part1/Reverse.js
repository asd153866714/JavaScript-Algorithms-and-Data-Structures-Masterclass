// javascript prototype array method
function reverse1(string) {
    return string.split('').reverse().join('')
}

// for loop
function reverse2(string) {
    let newString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}

// slice string and add first char to the end 
function reverse3(string) {
    if (string.length <= 1) return string
    return reverse3(string.slice(1)) + string[0]
}

console.log(
    reverse1('hello'),
    reverse2('awesome'),
    reverse3('apple')
    )