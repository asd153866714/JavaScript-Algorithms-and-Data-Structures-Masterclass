// Bad example of Hash Table

// Fast
function slowHash(key) {
    for (var i = 0; i < 10000; i++) {
      console.log("everyday i'm hashing");
    }
    return key[0].charCodeAt(0);
  }

//  Uniformly Distributes Values
function sameHashedValue(key) {
  return 0;
}

// Deterministic (same input => same output)
function randomHash(key) {
  return Math.floor(Math.random() * 1000)
}