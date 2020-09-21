function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

console.log(
    hash("pink", 10), // 0
    hash("orangered", 10), // 7
    hash("cyan", 10), // 3
)

// Improvement:
// 1. add a prime number
// 2. Math.min() function make hash still fast when string length is too big