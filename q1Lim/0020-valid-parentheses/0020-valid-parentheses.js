/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // } 가 먼저 나온다면 이것은 false
    // for 문을 돌면서 체크하자
    // {가 나온다면 }가 나와야한다
    // stack에 쌓기

    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    let stack = []
    
    for (let i = 0 ; i < s.length ; i++){
        if (s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i])
        } else if (stack[stack.length -1] === map[s[i]]){
            // (가 들어오고 만약 (가 들어왔다면 map에서 매핑된 value가 ( 이기 때문에
            // ( === (
            // 그럼 stack에서 뺴낸다
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length ? false : true

};