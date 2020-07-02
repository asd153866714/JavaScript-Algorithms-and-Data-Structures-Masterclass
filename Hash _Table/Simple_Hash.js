// Simple Hash Example

function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log(
    hash("pink", 10), // 0
    hash("orangered", 10), // 7
    hash("cyan", 10), // 3
)

// Problems with our current hash: 
// 1. Only hashes strings (we won't worry about this)
// 2. Not constant time - linear in key length
// 3. Could be a little more random