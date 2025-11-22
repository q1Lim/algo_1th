/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 이게 왜.. 이지..?
    // 우선 로만과 숫자를 매핑하자
    // 뒤에서 앞으로 반복문을 실행해나가면서 오른쪽보다 현재 값이 작으면 빼고, 아니면 더한다

    let result = 0
    const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };

    for (let i = s.length - 1 ; i >= 0 ; i--){
        const curr = map[s[i]]
        const next = map[s[i+1]]

        if (curr < next){
            result -= curr
        }else {
            result += curr
        }
    }
    return result
};