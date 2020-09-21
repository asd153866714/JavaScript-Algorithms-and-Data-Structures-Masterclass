function naiveSearch(long, short) {
    let count = 0;
    for (let i in long) {
        for (let j in short) {
            if (short[j] !== long[Number(i) + Number(j)]) break;
            if (Number(j) === (short.length - 1)) count++;
        }
    }
    return count;
}

console.log(naiveSearch('hellode fefhe', 'he'));