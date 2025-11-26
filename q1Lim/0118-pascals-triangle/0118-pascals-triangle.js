/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 첫번째와 마지막은 1을 넣자
    // 2차 배열을 만들자
    // (i-1) + (i+1)의 합으로 중간을 채우자
    
    let result = []

    for (let i = 0 ; i < numRows ; i++){
        const row = []
        row[0] = 1
        row[i] = 1
        for (let j = 1; j < i; j++){
            row[j] = result[i-1][j-1] + result[i-1][j]
        }
        result.push(row)
    }
    return result
};