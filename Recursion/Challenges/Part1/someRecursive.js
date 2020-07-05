function someRecursive(array, callback) {
    if (array.length === 1) return false
    if (callback(array[0])) return true
    return someRecursive(array.slice(1), callback)
}