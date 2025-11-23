/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    /*
        1. 3 이하의 숫자들은 false 처리
        2. 3으로 나누었을 때 나머지가 0이 아닐때까지 계속 나눈다
        3. n을 최대로 나누었을 때 n이 1이 아닌 경우 false, 나머지는 true
    */
    
    if (n <= 0) return false

    while(n % 3 === 0){
        n = n / 3
    }

    return n === 1
};