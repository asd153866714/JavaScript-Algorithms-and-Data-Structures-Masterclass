function binarySearch(array, value) {
    let newArray = array.sort((a, b) => a-b)
    let left = 0
    let right = newArray.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (value === newArray[mid]) return mid
        if (value < newArray[mid]) right = mid - 1
        if (value > newArray[mid]) left = mid + 1
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 5))
console.log(binarySearch([3, 4, 2, 1, 5], 3))