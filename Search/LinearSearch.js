function linearSearch(array, value){
    for (let i in array) {
        if (array[i] === value) return i
    }
    return -1
}
console.log(linearSearch([1, 2, 3], 5)) // -1
console.log(linearSearch([1, 2, 3], 3)) // 2
