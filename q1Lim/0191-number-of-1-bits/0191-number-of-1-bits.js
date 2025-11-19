/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0

    while(n > 0){
        // AND 연산 결과를 통해 1의 개수를 세기
        count += n & 0x1
        // n 자리 shift 처리
        n = n >> 1
    }

    return count
};