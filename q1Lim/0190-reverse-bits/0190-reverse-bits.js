/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    // bit의 자리를 바꾸는 것 
    // 10001110 -> 01110001
    // 비트 연산을 하지 않고 처리해보자

    const bits = n.toString(2).padStart(32, "0")

    let reversedBits = bits.split("").reverse().join("")

    return parseInt(reversedBits, 2)
};