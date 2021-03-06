function collectOddValues(array) {
    let newArray = []
    if (array.length === 0) {
        return newArray
    }
    if (array[0] % 2 !== 0) {
        newArray.push(array[0])
    }
    newArray = newArray.concat(collectOddValues(array.slice(1)))
    return newArray
}

console.log(collectOddValues([1, 2, 3, 4, 5]))

// [1] + [3] + [5]