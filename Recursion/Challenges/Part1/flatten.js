function flatten(oldArr) {
    let newArr = []
    for (let element of oldArr) {
        if (Array.isArray(element)) newArr =  newArr.concat(flatten(element))
        else newArr.push(element)
    }
    return newArr
}

console.log(flatten([1, 2, 3, [4, 5] ]))

// Array.concat() does not change existing array,
// so assign the new array to variable, and return new array