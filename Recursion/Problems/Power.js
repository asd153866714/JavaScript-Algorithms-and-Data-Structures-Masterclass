function power(num, exponent) {
    if (num === 1) return num
    return num * power(num, exponent - 1)
}