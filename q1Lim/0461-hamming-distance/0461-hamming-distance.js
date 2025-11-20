/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    /*
        Hamming distance : 두 값이 얼마나 다른지 "비트 단위" 로 비교해서 다른 비트의 개수를 세는 것
        XOR (^) = 비교 숫자들이 다르면 1 같아야 0
        
        XOR 처리한 거에 대한 숫자를 비트화 해서 1의 개수를 세면 된다
    */  
    let count = 0
    let xor = x ^ y

    while (xor > 0){
        count += xor & 0x1
        xor = xor >> 1
    }
    return count
};