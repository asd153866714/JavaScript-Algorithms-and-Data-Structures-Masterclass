function capatialFirst(array) {
    let newArray = []
    for (let word of array) {
        word[0].toUpperCase()
    }
    return
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
